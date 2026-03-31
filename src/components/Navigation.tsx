"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLagosTime } from "@/hooks/useLagosTime";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lagosTime = useLagosTime();

  return (
    <>
      <nav className="fixed top-0 w-full z-50 rounded-none glass-nav border-b border-white/5">
        <div className="flex justify-between items-center px-6 md:px-12 py-6 w-full max-w-[1920px] mx-auto">
          <Link href="/" className="text-xl font-black tracking-tighter text-white uppercase flex items-center gap-2">
            {/* simple SVG bike logo placeholder */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-container">
              <circle cx="5.5" cy="17.5" r="3.5"/>
              <circle cx="18.5" cy="17.5" r="3.5"/>
              <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"/>
            </svg>
            KINETIC LOGISTICS
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link className="font-medium tracking-tight text-sm uppercase text-secondary-fixed-dim hover:text-white transition-all duration-300" href="/services/last-mile">
              Services
            </Link>
            <Link className="font-medium tracking-tight text-sm uppercase text-secondary-fixed-dim hover:text-white transition-all duration-300" href="/tracking">
              Tracking
            </Link>
            <Link className="font-medium tracking-tight text-sm uppercase text-secondary-fixed-dim hover:text-white transition-all duration-300" href="/booking">
              Solutions
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2 mr-4 border-r border-white/10 pr-6">
              <div className="w-1.5 h-1.5 bg-primary-container rounded-full animate-pulse"></div>
              <span className="text-xs font-mono font-bold text-on-surface-variant tracking-widest uppercase">
                LOS {lagosTime || "--:--:--"}
              </span>
            </div>
            <Link href="/booking">
              <button className="hidden md:block bg-primary-container text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:scale-95 transition-all duration-200 ease-in-out">
                Get Quote
              </button>
            </Link>
            <button 
              className="md:hidden text-white cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined">{isMobileMenuOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md pt-32 px-6 pb-6 flex flex-col gap-8 md:hidden"
          >
            <Link onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black uppercase text-white" href="/services/last-mile">Services</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black uppercase text-white" href="/tracking">Tracking</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black uppercase text-white" href="/booking">Solutions</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/booking">
               <button className="w-full mt-8 bg-primary-container text-white px-8 py-5 font-bold uppercase tracking-widest text-sm">
                  Get Quote
                </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
