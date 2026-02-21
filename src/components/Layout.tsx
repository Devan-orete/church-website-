import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Church, ChevronDown, Menu, X, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NavItem = ({ 
  label, 
  children, 
  to,
  isButton = false,
  className = "",
  isScrolled
}: { 
  label: string; 
  children?: React.ReactNode; 
  to?: string;
  isButton?: boolean;
  className?: string;
  isScrolled: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => !isButton && setIsOpen(true)}
      onMouseLeave={() => !isButton && setIsOpen(false)}
    >
      {to ? (
        <Link 
          to={to}
          className={cn(
            "flex items-center gap-1 px-4 py-2 transition-all duration-200 font-medium",
            isButton ? "bg-church-purple text-white rounded-full hover:bg-church-purple/90 px-6 shadow-lg" : 
            (isScrolled ? "text-slate-700 hover:text-church-purple" : "text-white hover:text-church-gold"),
            className
          )}
        >
          {label}
        </Link>
      ) : (
        <button 
          className={cn(
            "flex items-center gap-1 px-4 py-2 transition-all duration-200 font-medium",
            isScrolled ? "text-slate-700 hover:text-church-purple" : "text-white hover:text-church-gold",
            className
          )}
        >
          {label}
          {children && <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />}
        </button>
      )}

      <AnimatePresence>
        {isOpen && children && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DropdownLink = ({ label, to, icon: Icon }: { label: string; to: string; icon?: any }) => (
  <Link 
    to={to}
    className="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-church-purple transition-colors"
  >
    {Icon && <Icon className="w-4 h-4" />}
    {label}
  </Link>
);

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col selection:bg-church-purple/20">
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        (isScrolled || !isHome) ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-2" : "bg-transparent py-6"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-church-purple via-church-blue to-church-gold rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
              <Church className="text-white w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-serif text-xl font-bold leading-tight transition-colors",
                (isScrolled || !isHome) ? "text-slate-900" : "text-white"
              )}>
                ZION TEMPLE
              </span>
              <span className={cn(
                "text-[10px] tracking-[0.2em] font-bold uppercase",
                (isScrolled || !isHome) ? "text-church-purple" : "text-church-gold"
              )}>
                Global Ministries
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            <NavItem label="Home" to="/" isScrolled={isScrolled || !isHome} />
            <NavItem label="About Us" isScrolled={isScrolled || !isHome}>
              <DropdownLink label="Leadership" to="/leadership" />
              <DropdownLink label="Branches" to="/branches" />
            </NavItem>
            <NavItem label="Ministries" isScrolled={isScrolled || !isHome}>
              <DropdownLink label="Youth Ministry" to="/youth-ministry" />
              <DropdownLink label="Children Ministry" to="/children-ministry" />
              <DropdownLink label="Outreach" to="/outreach" />
            </NavItem>
            <NavItem label="Contact Us" to="/contact" isScrolled={isScrolled || !isHome} />
            <div className="ml-4 flex items-center gap-3">
              <a 
                href="https://www.youtube.com/@ziontempleKE/streams" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-church-red text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                <Youtube className="w-5 h-5" />
                Sermons
              </a>
              <Link 
                to="/giving"
                className="px-6 py-2.5 bg-church-gold text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                Give
              </Link>
            </div>
          </div>

          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="text-slate-900" /> : <Menu className={cn((isScrolled || !isHome) ? "text-slate-900" : "text-white")} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-white lg:hidden pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 pb-12">
              <Link to="/" className="text-2xl font-bold text-slate-900">Home</Link>
              <div className="space-y-4">
                <p className="text-sm font-bold text-church-purple uppercase tracking-widest">About Us</p>
                <div className="pl-4 space-y-4">
                  <Link to="/leadership" className="block text-xl text-slate-600">Leadership</Link>
                  <Link to="/branches" className="block text-xl text-slate-600">Branches</Link>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-bold text-church-purple uppercase tracking-widest">Ministries</p>
                <div className="pl-4 space-y-4">
                  <Link to="/youth-ministry" className="block text-xl text-slate-600">Youth Ministry</Link>
                  <Link to="/children-ministry" className="block text-xl text-slate-600">Children Ministry</Link>
                  <Link to="/outreach" className="block text-xl text-slate-600">Outreach</Link>
                </div>
              </div>
              <Link to="/contact" className="text-2xl font-bold text-slate-900">Contact Us</Link>
              <div className="pt-6 flex flex-col gap-4">
                <a href="https://www.youtube.com/@ziontempleKE/streams" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-church-red text-white rounded-2xl flex items-center justify-center gap-3 font-bold">
                  <Youtube /> Watch Sermons
                </a>
                <Link 
                  to="/giving"
                  className="w-full py-4 bg-church-gold text-white rounded-2xl font-bold flex items-center justify-center"
                >
                  Give
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 bg-church-purple rounded-lg flex items-center justify-center">
              <Church className="text-white w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-serif font-bold text-slate-900">ZION TEMPLE</p>
              <p className="text-[8px] tracking-[0.2em] font-bold uppercase text-church-purple">Global Ministries</p>
            </div>
          </div>
          <p className="text-slate-500 text-sm mb-4">
            &copy; {new Date().getFullYear()} Zion Temple Global Ministries. All rights reserved.
          </p>
          <p className="text-slate-400 text-xs mb-8">
            Developed by <a href="https://devan-namatsi.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-church-purple hover:underline font-medium">Devan Namatsi</a>
          </p>
          <div className="flex justify-center gap-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <Link to="/privacy" className="hover:text-church-purple transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-church-purple transition-colors">Terms of Service</Link>
            <Link to="/giving" className="hover:text-church-purple transition-colors">Giving</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
