import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

export const Outreach = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-slate-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-church-red/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="text-church-red w-8 h-8" />
              </div>
              <span className="text-church-red font-bold uppercase tracking-widest text-sm">Compassion Zion</span>
              <h1 className="font-serif text-5xl font-bold text-slate-900 mt-2 mb-6">Hands that Help, Hearts that Love</h1>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our outreach programs are the heartbeat of our mission to impact society. We are committed to being the hands and feet of Jesus in our local and global communities.
              </p>
              <div className="space-y-8 mb-10">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Medical Missions</h4>
                  <p className="text-slate-600">Providing free healthcare services and medical supplies to underserved regions across Africa.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Education Support</h4>
                  <p className="text-slate-600">Sponsoring school fees and providing learning materials for underprivileged children to secure their future.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Community Support</h4>
                  <p className="text-slate-600">Regular food distribution, prison ministry, and rehabilitation programs for those in need.</p>
                </div>
              </div>
              <button className="px-10 py-4 bg-church-red text-white rounded-full font-bold shadow-lg hover:bg-church-red/90 transition-all flex items-center gap-2">
                Volunteer with Us <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden aspect-video shadow-xl">
                <img src="https://picsum.photos/seed/outreach1/800/600" alt="Outreach Impact" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-3xl overflow-hidden aspect-square shadow-xl">
                  <img src="https://picsum.photos/seed/outreach2/400/400" alt="Helping Hands" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-square shadow-xl">
                  <img src="https://picsum.photos/seed/outreach3/400/400" alt="Community Support" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
