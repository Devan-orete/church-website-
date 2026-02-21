import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

export const YouthMinistry = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-slate-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-church-purple/10 rounded-2xl flex items-center justify-center mb-6">
                <Star className="text-church-purple w-8 h-8" />
              </div>
              <span className="text-church-purple font-bold uppercase tracking-widest text-sm">Zion Youth</span>
              <h1 className="font-serif text-5xl font-bold text-slate-900 mt-2 mb-6">Empowering Tomorrow's Leaders</h1>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our Youth Ministry is a dynamic space where teenagers and young adults discover their identity in Christ. We believe that young people are not just the future of the church, but the present.
              </p>
              <div className="space-y-8 mb-10">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Weekly 'Ignite' Gatherings</h4>
                  <p className="text-slate-600">Every Friday at 6:00 PM. A high-energy environment with modern worship, relevant teaching, and authentic community.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Mentorship Programs</h4>
                  <p className="text-slate-600">Connecting young people with experienced mentors to navigate life's challenges through a biblical lens.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Creative Arts & Media</h4>
                  <p className="text-slate-600">Providing platforms for youth to express their faith through music, dance, digital media, and more.</p>
                </div>
              </div>
              <button className="px-10 py-4 bg-church-purple text-white rounded-full font-bold shadow-lg hover:bg-church-purple/90 transition-all flex items-center gap-2">
                Get Involved <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden aspect-video shadow-xl">
                <img src="https://picsum.photos/seed/youth1/800/600" alt="Youth Worship" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-3xl overflow-hidden aspect-square shadow-xl">
                  <img src="https://picsum.photos/seed/youth2/400/400" alt="Youth Community" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-square shadow-xl">
                  <img src="https://picsum.photos/seed/youth3/400/400" alt="Youth Leadership" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
