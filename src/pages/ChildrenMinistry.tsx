import React from 'react';
import { Baby, ArrowRight } from 'lucide-react';

export const ChildrenMinistry = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-slate-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="rounded-3xl overflow-hidden aspect-video shadow-xl">
                <img src="https://picsum.photos/seed/kids1/800/600" alt="Kids Learning" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-3xl overflow-hidden aspect-square shadow-xl">
                  <img src="https://picsum.photos/seed/kids2/400/400" alt="Kids Playing" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-square shadow-xl">
                  <img src="https://picsum.photos/seed/kids3/400/400" alt="Kids Singing" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-church-gold/10 rounded-2xl flex items-center justify-center mb-6">
                <Baby className="text-church-gold w-8 h-8" />
              </div>
              <span className="text-church-gold font-bold uppercase tracking-widest text-sm">Zion Kids</span>
              <h1 className="font-serif text-5xl font-bold text-slate-900 mt-2 mb-6">Nurturing Hearts, Building Faith</h1>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We believe children are a gift from God. Our mission is to partner with parents to lead children into a growing relationship with Jesus Christ.
              </p>
              <div className="space-y-8 mb-10">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Safe & Secure Environment</h4>
                  <p className="text-slate-600">Our check-in system and background-checked volunteers ensure your child's safety is our top priority.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Age-Appropriate Learning</h4>
                  <p className="text-slate-600">From toddlers to pre-teens, we provide engaging Bible lessons tailored to every developmental stage.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Fun & Interactive</h4>
                  <p className="text-slate-600">Through games, crafts, and music, we make learning about God an adventure that kids look forward to every week.</p>
                </div>
              </div>
              <button className="px-10 py-4 bg-church-gold text-white rounded-full font-bold shadow-lg hover:bg-church-gold/90 transition-all flex items-center gap-2">
                Register Your Child <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
