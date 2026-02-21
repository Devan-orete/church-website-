import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Youtube, Globe, Users, ChevronLeft, ChevronRight, Clock, Calendar } from 'lucide-react';

const slides = [
  {
    image: "input_file_0.png",
    tag: "Welcome to Zion Temple",
    title: <>Experience the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-church-gold via-white to-church-gold">Divine Presence</span></>,
    description: "Join our global family as we worship, grow, and impact the world with the message of hope and transformation."
  },
  {
    image: "input_file_1.png",
    tag: "Global Community",
    title: <>A Place to <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-church-gold via-white to-church-gold">Belong & Grow</span></>,
    description: "Discover your purpose and build authentic relationships in a community that cares for your spiritual journey."
  },
  {
    image: "input_file_2.png",
    tag: "Impactful Ministry",
    title: <>Transforming <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-church-gold via-white to-church-gold">Lives Globally</span></>,
    description: "From local outreach to international missions, we are committed to being the hands and feet of Jesus."
  }
];

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={slides[currentSlide].image} 
              alt={`Slide ${currentSlide + 1}`} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-church-gold/20 backdrop-blur-md border border-church-gold/30 text-church-gold rounded-full text-sm font-bold tracking-widest uppercase mb-6">
                {slides[currentSlide].tag}
              </span>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-10">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/registration"
                  className="w-full sm:w-auto px-10 py-4 bg-church-purple text-white rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  JOIN <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="https://www.youtube.com/@ziontempleKE/streams" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <Youtube className="w-5 h-5 text-church-red" /> Watch Live
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 px-4 hidden md:flex justify-between pointer-events-none">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === i ? 'bg-church-gold w-8' : 'bg-white/30'}`}
            />
          ))}
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-[0.3em]">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* About Summary */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/leadership/800/1000" 
                  alt="Our Leadership" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-church-gold rounded-3xl flex flex-col items-center justify-center text-white p-6 shadow-xl rotate-3">
                <span className="text-4xl font-bold">25+</span>
                <span className="text-sm font-medium text-center uppercase tracking-wider">Years of Global Ministry</span>
              </div>
            </div>
            <div>
              <h2 className="text-church-purple font-bold uppercase tracking-widest mb-4">About Us</h2>
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-8">Building a Legacy of Faith and Love</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Zion Temple Global Ministries is more than just a church; it's a vibrant community dedicated to spiritual growth, social impact, and global transformation.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-church-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <Globe className="text-church-blue w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Global Reach</h4>
                    <p className="text-sm text-slate-500">Branches across 15 countries.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-church-gold/10 rounded-xl flex items-center justify-center shrink-0">
                    <Users className="text-church-gold w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Community</h4>
                    <p className="text-sm text-slate-500">A diverse family of believers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Programs & Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-church-purple font-bold uppercase tracking-widest mb-4">Our Schedule</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-slate-900">Weekly Programs & Services</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sunday Services */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100"
            >
              <div className="w-14 h-14 bg-church-purple/10 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="text-church-purple w-7 h-7" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Sunday Services</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="text-church-gold w-5 h-5 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900">1st Service</p>
                    <p className="text-slate-500">7:00 AM — 10:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-church-gold w-5 h-5 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900">2nd Service</p>
                    <p className="text-slate-500">10:00 AM — 12:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mid-Week Programs */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100"
            >
              <div className="w-14 h-14 bg-church-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-church-blue w-7 h-7" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Mid-Week</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="text-church-gold w-5 h-5 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900">Tuesday</p>
                    <p className="text-slate-700 font-medium">School of Ministry</p>
                    <p className="text-slate-500">4:00 PM — 6:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Daily Devotions */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100"
            >
              <div className="w-14 h-14 bg-church-gold/10 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="text-church-gold w-7 h-7" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Daily Programs</h4>
              <p className="text-sm font-bold text-church-purple uppercase tracking-widest mb-4">Monday — Friday</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-church-gold rounded-full mt-2 shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Lunch Hour</p>
                    <p className="text-slate-500 text-lg">1:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-church-gold rounded-full mt-2 shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Evening Devotion</p>
                    <p className="text-slate-500 text-lg">5:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
