import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0e0e0f] w-full rounded-none">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 w-full max-w-[1920px] mx-auto">
        <div className="space-y-6">
          <div className="text-lg font-bold text-white uppercase tracking-widest flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-container">
              <circle cx="5.5" cy="17.5" r="3.5"/>
              <circle cx="18.5" cy="17.5" r="3.5"/>
              <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"/>
            </svg>
            KINETIC LOGISTICS
          </div>
          <p className="font-body text-[0.875rem] leading-relaxed text-[#484949]">
            Architecting the future of movement across Sub-Saharan Africa. Precision. Speed. Integrity.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-6">Operations</h4>
          <nav className="flex flex-col space-y-3">
            <Link className="font-body text-[0.875rem] text-[#484949] hover:text-[#0052FF] transition-colors opacity-80 hover:opacity-100" href="/">Ikeja Head Office</Link>
            <Link className="font-body text-[0.875rem] text-[#484949] hover:text-[#0052FF] transition-colors opacity-80 hover:opacity-100" href="/services/last-mile">Fleet Management</Link>
            <Link className="font-body text-[0.875rem] text-[#484949] hover:text-[#0052FF] transition-colors opacity-80 hover:opacity-100" href="/booking">Global Freight</Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-6">Connect</h4>
          <nav className="flex flex-col space-y-3">
            <Link className="font-body text-[0.875rem] text-[#484949] hover:text-[#0052FF] transition-colors opacity-80 hover:opacity-100 flex items-center gap-2" href="https://wa.me/2349019597944?text=Hello%20Kinetic%20Logistics.%20I%20am%20interested%20in%20requesting%20a%20professional%20consultation." target="_blank" rel="noopener noreferrer">
               <span className="material-symbols-outlined text-[16px]">chat</span> WhatsApp Secure Consult
            </Link>
            <Link className="font-body text-[0.875rem] text-[#484949] hover:text-[#0052FF] transition-colors opacity-80 hover:opacity-100 flex items-center gap-2" href="tel:+2349019597944">
               <span className="material-symbols-outlined text-[16px]">call</span> Direct Dispatch Line
            </Link>
          </nav>
        </div>
        <div className="space-y-6">
          <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-6">Network Status</h4>
          <div className="flex items-center gap-3 border border-[#484949]/30 p-4 w-fit rounded-none">
            <div className="w-2 h-2 bg-primary-container rounded-full animate-pulse"></div>
            <span className="text-xs text-white font-medium uppercase tracking-tighter">Systems Operational</span>
          </div>
        </div>
      </div>
      <div className="px-12 py-8 border-t border-[#484949]/10">
        <p className="font-body text-[0.7rem] tracking-widest text-[#484949] uppercase">
          © {new Date().getFullYear()} KINETIC LOGISTICS. PRECISION ENGINEERED IN LAGOS.
        </p>
      </div>
    </footer>
  );
}
