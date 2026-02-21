import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, User, Mail, Phone, MapPin, ClipboardList } from 'lucide-react';

export const Registration = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    residence: '',
    serviceAreas: [] as string[],
    notes: ''
  });

  const handleCheckboxChange = (option: string) => {
    setFormData(prev => ({
      ...prev,
      serviceAreas: prev.serviceAreas.includes(option)
        ? prev.serviceAreas.filter(a => a !== option)
        : [...prev.serviceAreas, option]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to register');
      
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const serviceOptions = [
    "Media",
    "Choir",
    "Praise & Worship",
    "Usher",
    "Outreach",
    "Join a Cell Group"
  ];

  if (submitted) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-slate-50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full mx-auto p-12 bg-white rounded-[3rem] shadow-2xl text-center border border-slate-100"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-green-500 w-10 h-10" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Registration Successful!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for your interest in serving at Zion Temple. Our team will contact you shortly with more information.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-8 py-3 bg-church-purple text-white rounded-full font-bold shadow-lg hover:bg-church-purple/90 transition-all"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold text-slate-900 mb-6">Join the Family</h1>
          <p className="text-lg text-slate-600">
            Fill out the form below to register and choose where you'd like to serve in our ministry.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <User className="w-4 h-4" /> Full Name
                </label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-church-purple transition-colors" 
                  placeholder="John Doe" 
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email Address
                </label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-church-purple transition-colors" 
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Phone Number
                </label>
                <input 
                  required
                  type="tel" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-church-purple transition-colors" 
                  placeholder="0712 345 678" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Residence
                </label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-church-purple transition-colors" 
                  placeholder="e.g. Burumba" 
                  value={formData.residence}
                  onChange={(e) => setFormData({...formData, residence: e.target.value})}
                />
              </div>
            </div>

            {/* Service Areas */}
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <ClipboardList className="w-4 h-4" /> Where would you like to serve?
              </label>
              <div className="grid sm:grid-cols-2 gap-4">
                {serviceOptions.map((option) => (
                  <label key={option} className={`flex items-center gap-3 p-4 rounded-xl border transition-colors cursor-pointer ${formData.serviceAreas.includes(option) ? 'bg-church-purple/5 border-church-purple' : 'bg-slate-50 border-slate-100 hover:bg-slate-100'}`}>
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 rounded text-church-purple focus:ring-church-purple" 
                      checked={formData.serviceAreas.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                    />
                    <span className={`font-medium ${formData.serviceAreas.includes(option) ? 'text-church-purple' : 'text-slate-700'}`}>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Additional Notes</label>
              <textarea 
                rows={4} 
                className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-church-purple transition-colors" 
                placeholder="Tell us a bit more about yourself..."
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
              ></textarea>
            </div>

            {error && (
              <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
                {error}
              </div>
            )}

            <button 
              disabled={loading}
              className="w-full py-4 bg-church-purple text-white rounded-xl font-bold shadow-xl hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:scale-100"
            >
              {loading ? 'Processing...' : 'Complete Registration'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
