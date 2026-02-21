import React from 'react';
import { motion } from 'motion/react';

export const Leadership = () => {
  const leaders = [
    { name: "Apostle Dr. Paul Gitwaza", role: "Founder & President", img: "https://picsum.photos/seed/leader1/400/500" },
    { name: "Pastor Angelique Gitwaza", role: "Co-Founder", img: "https://picsum.photos/seed/leader2/400/500" },
    { name: "Bishop John Doe", role: "Regional Overseer", img: "https://picsum.photos/seed/leader3/400/500" },
    { name: "Pastor Sarah Smith", role: "Youth Pastor", img: "https://picsum.photos/seed/leader4/400/500" },
    { name: "Elder Michael Brown", role: "Administration", img: "https://picsum.photos/seed/leader5/400/500" },
    { name: "Deaconess Jane Wilson", role: "Outreach Coordinator", img: "https://picsum.photos/seed/leader6/400/500" }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-church-purple font-bold uppercase tracking-widest mb-4">Our Leadership</h2>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 mb-6">Guided by Vision and Faith</h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            Meet the dedicated men and women who lead Zion Temple Global Ministries with integrity, passion, and a commitment to the Great Commission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {leaders.map((leader, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img 
                  src={leader.img} 
                  alt={leader.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">{leader.name}</h4>
              <p className="text-church-purple font-medium text-lg">{leader.role}</p>
              <p className="mt-4 text-slate-600">
                Dedicated to serving the community and spreading the message of hope through spiritual guidance and practical support.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
