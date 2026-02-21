import React from 'react';
import { MapPin, Phone, Mail, Youtube, Globe } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20">
              <h2 className="text-church-gold font-bold uppercase tracking-widest mb-4">Contact Us</h2>
              <h1 className="font-serif text-5xl font-bold text-white mb-10">We'd Love to Hear From You</h1>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-church-gold w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Our Location</p>
                    <p className="text-white/60">123 Zion Way, Faith City, FC 45678</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-church-gold w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Phone Number</p>
                    <p className="text-white/60">+254 720 829 144</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-church-gold w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Email Address</p>
                    <p className="text-white/60">ziontempleglobalministries@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-church-purple transition-colors cursor-pointer">
                  <Youtube className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-church-purple transition-colors cursor-pointer">
                  <Globe className="w-6 h-6" />
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-12 lg:p-20 border-l border-white/10">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/60 uppercase tracking-widest">First Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-church-gold transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/60 uppercase tracking-widest">Last Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-church-gold transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-church-gold transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 uppercase tracking-widest">Your Message</label>
                  <textarea rows={6} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-church-gold transition-colors" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full py-5 bg-church-gold text-white rounded-xl font-bold shadow-xl hover:scale-[1.02] transition-transform text-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
