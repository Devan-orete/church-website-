import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, CreditCard, Heart, CheckCircle2 } from 'lucide-react';

export const Giving = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-church-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="text-church-gold w-10 h-10" />
          </div>
          <h1 className="font-serif text-5xl font-bold text-slate-900 mb-6">Generosity Changes Lives</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Your faithful giving supports our mission to spread the gospel and impact communities globally. Thank you for your partnership.
          </p>
        </div>

        <div className="grid gap-8">
          {/* M-Pesa Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100"
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-xl flex items-center justify-center">
                    <Smartphone className="text-[#4CAF50] w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Give via M-Pesa</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Paybill Number</p>
                    <p className="text-3xl font-bold text-church-purple">400200</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Account Number</p>
                    <p className="text-3xl font-bold text-church-purple">411211</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 bg-slate-900 rounded-3xl p-8 text-white">
                <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-church-gold w-5 h-5" />
                  Step-by-Step Guide
                </h3>
                <ol className="space-y-4 text-white/80">
                  <li className="flex gap-4">
                    <span className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">1</span>
                    <span>Go to M-Pesa menu on your phone</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">2</span>
                    <span>Select <strong>Lipa na M-Pesa</strong></span>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">3</span>
                    <span>Select <strong>Pay Bill</strong></span>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">4</span>
                    <span>Enter Business No: <strong>400200</strong></span>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">5</span>
                    <span>Enter Account No: <strong>411211</strong></span>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">6</span>
                    <span>Enter the Amount and your M-Pesa PIN</span>
                  </li>
                </ol>
              </div>
            </div>
          </motion.div>

          {/* Other Ways to Give */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <div className="w-12 h-12 bg-church-blue/10 rounded-xl flex items-center justify-center mb-6">
                <CreditCard className="text-church-blue w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Bank Transfer</h3>
              <p className="text-slate-600 mb-4">You can also give directly through bank transfer to our local accounts.</p>
              <button className="text-church-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
                View Bank Details <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <div className="w-12 h-12 bg-church-purple/10 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="text-church-purple w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">In-Person</h3>
              <p className="text-slate-600 mb-4">Visit any of our branches during service hours to give in person.</p>
              <button className="text-church-purple font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Find a Branch <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);
