"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BookingFlow() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <span className="text-primary-container font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Precision Booking</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">Freight <br/><span className="text-outline">Architecture</span></h1>
          </div>
          <div className="text-right max-w-sm">
            <p className="text-on-surface-variant font-body leading-relaxed">Systematic shipment management for global enterprises. Zero-radius precision from origin to destination.</p>
          </div>
        </motion.div>
      </header>

      {/* Booking Flow Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Progress Indicator (Sidebar for Web) */}
        <aside className="lg:col-span-3 bg-surface-container-low p-10 border-r border-outline-variant/10">
          <div className="flex flex-col gap-12">
            {[
              { step: "01", title: "Shipment Details", active: true },
              { step: "02", title: "Service Selection", active: false },
              { step: "03", title: "Recipient", active: false },
              { step: "04", title: "Review", active: false }
            ].map((item, idx) => (
              <div key={idx} className={`flex items-center gap-4 ${item.active ? 'group' : 'opacity-40'}`}>
                <div className={`w-8 h-8 flex items-center justify-center text-xs font-bold ${item.active ? 'bg-primary-container text-white' : 'border border-outline text-white'}`}>
                  {item.step}
                </div>
                <div>
                  <p className={`text-[10px] uppercase tracking-widest font-black ${item.active ? 'text-primary-container' : 'text-on-surface-variant'}`}>
                    Step {item.step}
                  </p>
                  <p className="text-sm font-bold text-white uppercase">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-24 bg-surface-container-highest p-6 relative overflow-hidden">
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4 text-on-surface-variant flex items-center justify-between">
              Live Estimation
              <span className="w-1.5 h-1.5 bg-primary-container rounded-full animate-pulse"></span>
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-on-surface-variant">Base Rate</span>
                <span className="text-white font-mono">$1,250.00</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-on-surface-variant">Surcharges</span>
                <span className="text-white font-mono flex items-center gap-2">
                  <span className="material-symbols-outlined text-[10px] animate-spin">sync</span>
                  $85.50
                </span>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 flex justify-between items-end">
                <span className="text-xs font-bold uppercase">Total Quote</span>
                <span className="text-xl font-black text-primary-container font-mono">$1,335.50</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Form Content Canvas */}
        <div className="lg:col-span-9 bg-surface-container p-8 md:p-16">
          <section className="space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="space-y-6">
                <h3 className="text-xl font-bold uppercase tracking-tight flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container">location_on</span>
                  Origin
                </h3>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-black text-on-surface-variant">Pickup Location</label>
                  <input className="w-full bg-surface-container-highest border-none p-4 text-white focus:ring-0 border-b-2 border-transparent focus:border-primary-container transition-all outline-none placeholder:text-outline/50" placeholder="Ikeja Industrial Estate, Lagos" type="text"/>
                </div>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="space-y-6">
                <h3 className="text-xl font-bold uppercase tracking-tight flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container">flag</span>
                  Destination
                </h3>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-black text-on-surface-variant">Drop-off Point</label>
                  <input className="w-full bg-surface-container-highest border-none p-4 text-white focus:ring-0 border-b-2 border-transparent focus:border-primary-container transition-all outline-none placeholder:text-outline/50" placeholder="Lekki Phase 1, Victoria Island" type="text"/>
                </div>
              </motion.div>
            </div>

            {/* Metrics Grid */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="pt-12 border-t border-outline-variant/10">
              <h3 className="text-xl font-bold uppercase tracking-tight mb-8">Cargo Specifications</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Weight (KG)", val: "25.0" },
                  { label: "Length (CM)", val: "120" },
                  { label: "Width (CM)", val: "80" },
                  { label: "Height (CM)", val: "100" }
                ].map((item, i) => (
                  <div key={i} className="bg-surface-container-low p-6 space-y-4">
                    <label className="text-[10px] uppercase tracking-widest font-black text-on-surface-variant">{item.label}</label>
                    <input className="w-full bg-transparent border-none p-0 text-2xl font-black text-white focus:ring-0 outline-none" type="number" defaultValue={item.val}/>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Cargo Imagery Context */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="relative h-64 w-full overflow-hidden mt-12">
              <Image 
                className="object-cover grayscale opacity-40" 
                alt="Cargo Containers" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbkThMtBvuaLZ2xOkilTCXram639k__cL0aBw7eZzh9G1GcRVYNXoRwdz7_GdbDpTqJuXKghDK_MZQ74FHmDZ-SJHYx7DGB5K5bJrkyrGOXJb5_zcFReJuhWOjuvFIuji7OpDX0LQMMsFpV7bruKyollKH7Vg6n7TtMDd-2edMa9He-oyzqe_CRnWY5sfKCAUdPcD7fFNeRi_Ks7-cG-FihZMSUWS-4wFfsaJAyXIdNZK9qX6SIQTlJdKvgI5oZvrWCNe_Ou7hZaU"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-[10px] uppercase tracking-[0.3em] font-black text-primary-container mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-container rounded-full animate-pulse"></span>
                  Validation active
                </p>
                <p className="text-lg font-bold uppercase text-white">AI-Driven Volumetric Analysis</p>
              </div>
            </motion.div>

            {/* Action Footer */}
            <div className="flex justify-end pt-12">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  const btn = e.currentTarget;
                  btn.innerHTML = '<span class="material-symbols-outlined animate-spin">sync</span> Validating Cargo Protocol...';
                  setTimeout(() => {
                    window.location.href = '/tracking';
                  }, 1500);
                }}
                className="flex items-center gap-4 bg-primary-container hover:bg-inverse-primary text-white px-12 py-5 font-black uppercase tracking-widest transition-all group"
              >
                Proceed to Logistics Tier
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </div>
            
          </section>
        </div>
      </div>

      {/* Featured Logistic Assets */}
      <section className="mt-32">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-12">Kinetic <span className="text-outline">Fleet Status</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {[
            { tag: "AIR FREIGHT", title: "Express Global", desc: "Real-time GPS tracking enabled for all airborne assets.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAztggoxnT-zh1y1A1e46sOsDF_L5wDQcab8x6XeMDYjpLf3wXddxQ8yh2Rt4EtApj4n0rR1RlKq5bA9U_TtRz_doZnBIINBCx6eKOgZXrLaHUWeb8KdMAIftS9fz3CtiVOJrvVOw_lg80QchVLM5VupQlGia85cg9IRQRjOT1AVGy3RVVXEmOEZH6vwh40a3hZ_oZBGM7JLlYrlNJog9IDhLNrULDvXmhjxl0BoRuCuJn0qThOv3chlw0Una-ebhcpL4RhD3QKhzI" },
            { tag: "GROUND UNIT", title: "Interstate Heavy", desc: "Optimized routing through Lagos-Ibadan expressway corridors.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1wRP7oUgS4YCKZLQ2OSXToXZsMufeqyqmHwln37Tzc9m5HpGY3TD8Ms_YJgXgwvl3vi3r-FszPGMpL5TBsLXCRmSgTy0m_gftB75iG9guS9yX_qxLJACF2dEQF4R21Mvwl85L7v3sYmW1sHLr6p9WH_f4vKJcn1lLqVmZMyRergt1njfpdgyqZwWYQGFH_OnRnmeaIIfTYTPrYL_zfwECkwY46kjzjyFRNiwCSqgJXozk0Xnqh63WU_-CCf-Gy7KMYl-eav_aSaY" },
            { tag: "MARITIME", title: "Trans-Atlantic", desc: "Strategic clearance protocols for Apapa and Tin Can ports.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtc7J-Um_cTq-IAPQP2s9qvX6WPhQSOiUDobv05UHEVDFbL-dWzDnQXdPxN7ll_opi1i5lZsSlx97L2rV-uWL9Mdafm0qAs-UoVJTrDYoOlHpIdQWvw3BYA6u5sae475Wv9YxXVSVV-E5-xDWYUwvQ0a6EHK7IXsRKBhG2mHMgOyAzOV9V8P0-t4yEUoIeWSkTNVfxqaQrnDns8Lnmd3cqgC42-08JImPKbx4DFBnNObR7b9HGtMr46cHSCTbPIHKmNF5tGKc3IRA" }
          ].map((item, i) => (
            <div key={i} className="aspect-square relative group cursor-pointer overflow-hidden bg-surface-container-low">
              <Image className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60" alt={item.title} src={item.img} fill />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-[10px] font-black tracking-widest text-primary-container mb-2">{item.tag}</span>
                <h3 className="text-xl font-bold text-white uppercase">{item.title}</h3>
                <p className="text-xs text-on-surface-variant mt-2 opacity-0 group-hover:opacity-100 transition-opacity">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
