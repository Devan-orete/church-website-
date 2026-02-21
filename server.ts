import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("registrations.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS registrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    residence TEXT NOT NULL,
    serviceAreas TEXT NOT NULL,
    notes TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/register", async (req, res) => {
    try {
      const { fullName, email, phone, residence, serviceAreas, notes } = req.body;

      // 1. Save to Database
      const stmt = db.prepare(`
        INSERT INTO registrations (fullName, email, phone, residence, serviceAreas, notes)
        VALUES (?, ?, ?, ?, ?, ?)
      `);
      stmt.run(fullName, email, phone, residence, JSON.stringify(serviceAreas), notes);

      // 2. Send Email
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: 'ziontempleglobalministries@gmail.com',
        subject: `New Member Registration: ${fullName}`,
        text: `
          New Registration Details:
          -------------------------
          Full Name: ${fullName}
          Email: ${email}
          Phone: ${phone}
          Residence: ${residence}
          Service Areas: ${serviceAreas.join(", ")}
          Notes: ${notes || "None"}
          
          This registration has also been saved to the secure database.
        `,
      };

      // Only attempt to send if credentials are provided
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully to ziontempleglobalministries@gmail.com");
      } else {
        console.warn("SMTP credentials missing. Email not sent, but data saved to DB.");
        console.log("Email content that would have been sent:", mailOptions.text);
      }

      res.status(200).json({ success: true, message: "Registration saved and email notification sent." });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  // Admin API (Internal/Protected in real app)
  app.get("/api/admin/registrations", (req, res) => {
    try {
      const rows = db.prepare("SELECT * FROM registrations ORDER BY createdAt DESC").all();
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch registrations" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
