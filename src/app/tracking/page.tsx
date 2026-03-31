"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TrackingDashboard() {
  const [liveProgress, setLiveProgress] = useState(72.1);
  const [etaDate, setEtaDate] = useState("");

  useEffect(() => {
    // Generate relative ETA so it always looks "alive"
    const d = new Date();
    d.setDate(d.getDate() + 1);
    setEtaDate(new Intl.DateTimeFormat("en-GB", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }).format(d));

    const interval = setInterval(() => {
      setLiveProgress(p => p < 99.9 ? p + (Math.random() * 0.05) : p);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
      {/* Left Column: Summary & History */}
      <div className="col-span-1 md:col-span-12 lg:col-span-8 space-y-12">
        {/* Active Shipments Summary & Search */}
        <section className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <span className="text-primary-container font-black text-xs uppercase tracking-[0.3em] block mb-2">Operational Overview</span>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">Active Shipments</h1>
            </div>
            <div className="flex gap-4">
              <div className="bg-surface-container-low p-6 min-w-[160px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2 h-2 bg-primary-container m-4 rounded-full animate-ping"></div>
                <p className="text-[0.65rem] uppercase tracking-widest text-on-surface-variant mb-1">In Transit</p>
                <p className="text-3xl font-black text-white">12</p>
              </div>
              <div className="bg-surface-container-low p-6 min-w-[160px]">
                <p className="text-[0.65rem] uppercase tracking-widest text-on-surface-variant mb-1">Delayed</p>
                <p className="text-3xl font-black text-tertiary-container">02</p>
              </div>
            </div>
          </motion.div>

          {/* High Precision Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-surface-container-highest p-1 flex flex-col md:flex-row md:items-center"
          >
            <span className="material-symbols-outlined px-6 text-on-surface-variant hidden md:block">search</span>
            <input 
              className="bg-transparent border-none focus:ring-0 w-full px-6 md:px-0 py-6 text-sm font-bold tracking-widest text-white placeholder:text-outline uppercase outline-none" 
              placeholder="ENTER TRACKING ID OR CONSIGNMENT NUMBER" 
              type="text"
            />
            <button 
              onClick={(e) => {
                const btn = e.currentTarget;
                btn.innerHTML = '<span class="material-symbols-outlined animate-spin align-middle mr-2">sync</span> Locating...';
                setTimeout(() => { btn.innerHTML = 'Asset Located!'; }, 1000);
              }}
              className="bg-primary-container text-white px-10 py-5 font-black text-xs uppercase tracking-widest hover:opacity-90 transition-all"
            >
                Locate Asset
            </button>
          </motion.div>
        </section>

        {/* Detailed Table Section */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-outline-variant/10 pb-4 gap-4">
            <h2 className="text-xl font-bold tracking-tight text-white uppercase flex items-center gap-3">
              Consignment History
              <span className="text-[10px] bg-primary-container/20 text-primary-container px-2 py-0.5 rounded-sm animate-pulse">LIVE</span>
            </h2>
            <div className="flex gap-4">
              <button onClick={() => alert("Manifest exported securely.")} className="text-[0.7rem] font-bold uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors">Export Manifest</button>
              <button onClick={() => alert("Filter criteria loaded.")} className="text-[0.7rem] font-bold uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors">Filters</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="text-[0.65rem] uppercase tracking-[0.2em] text-outline">
                  <th className="pb-6 font-medium">Asset ID</th>
                  <th className="pb-6 font-medium">Destination</th>
                  <th className="pb-6 font-medium">Progress / Status</th>
                  <th className="pb-6 font-medium">ETA (Lagos)</th>
                  <th className="pb-6 font-medium"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                {/* Row 1 (Active) */}
                <tr className="group hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-8">
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-white tracking-tighter">KNC-9920-X1</span>
                      <span className="text-[0.65rem] text-on-surface-variant uppercase">Air Freight</span>
                    </div>
                  </td>
                  <td className="py-8">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white tracking-tight">London (LHR)</span>
                      <span className="text-[0.65rem] text-on-surface-variant uppercase">Via Terminal 4</span>
                    </div>
                  </td>
                  <td className="py-8 min-w-[240px] pr-8">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-[0.65rem] uppercase tracking-widest">
                        <span className="text-primary-container font-black flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-container rounded-full animate-pulse"></span>
                          In Transit
                        </span>
                        <span className="text-on-surface-variant font-mono">{liveProgress.toFixed(2)}%</span>
                      </div>
                      <div className="h-1 w-full bg-surface-container-highest">
                        <motion.div animate={{ width: `${liveProgress}%` }} className="h-full bg-primary-container transition-all duration-1000" />
                      </div>
                    </div>
                  </td>
                  <td className="py-8">
                    <span className="text-sm font-bold text-white tracking-tight">{etaDate || "Calculating..."}</span>
                  </td>
                  <td className="py-8 text-right pr-4">
                    <span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors cursor-pointer">chevron_right</span>
                  </td>
                </tr>
                {/* Row 2 (Delayed) */}
                <tr className="group hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-8">
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-white tracking-tighter">KNC-1045-B2</span>
                      <span className="text-[0.65rem] text-on-surface-variant uppercase">Sea Freight</span>
                    </div>
                  </td>
                  <td className="py-8">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white tracking-tight">Rotterdam (RTM)</span>
                      <span className="text-[0.65rem] text-on-surface-variant uppercase">Port Authority</span>
                    </div>
                  </td>
                  <td className="py-8 min-w-[240px] pr-8">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-[0.65rem] uppercase tracking-widest">
                        <span className="text-tertiary-container font-black">Customs Delay</span>
                        <span className="text-on-surface-variant">45%</span>
                      </div>
                      <div className="h-1 w-full bg-surface-container-highest">
                        <motion.div initial={{ width: 0 }} animate={{ width: "45%" }} className="h-full bg-tertiary-container" />
                      </div>
                    </div>
                  </td>
                  <td className="py-8">
                    <span className="text-sm font-bold text-white tracking-tight">Oct 28, 14:30</span>
                  </td>
                  <td className="py-8 text-right pr-4">
                    <span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors cursor-pointer">chevron_right</span>
                  </td>
                </tr>
                {/* Row 3 (Success) */}
                <tr className="group hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-8">
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-white tracking-tighter">KNC-8812-Y7</span>
                      <span className="text-[0.65rem] text-on-surface-variant uppercase">Intermodal</span>
                    </div>
                  </td>
                  <td className="py-8">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white tracking-tight">New York (JFK)</span>
                      <span className="text-[0.65rem] text-on-surface-variant uppercase">Warehouse A</span>
                    </div>
                  </td>
                  <td className="py-8 min-w-[240px] pr-8">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-[0.65rem] uppercase tracking-widest">
                        <span className="text-outline font-black">Delivered</span>
                        <span className="text-on-surface-variant">100%</span>
                      </div>
                      <div className="h-1 w-full bg-surface-container-highest">
                        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} className="h-full bg-on-surface-variant" />
                      </div>
                    </div>
                  </td>
                  <td className="py-8">
                    <span className="text-sm font-bold text-on-surface-variant tracking-tight line-through">Oct 21, 11:20</span>
                  </td>
                  <td className="py-8 text-right pr-4">
                    <span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors cursor-pointer">chevron_right</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Right Column: Side Panel (Selected Shipment Details) */}
      <aside className="col-span-1 md:col-span-12 lg:col-span-4 space-y-8 lg:sticky lg:top-32 h-fit">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-surface-container-low border border-outline-variant/10 p-8 space-y-10"
        >
          {/* Selected Title */}
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-black tracking-tighter text-white">KNC-9920-X1</h3>
              <span className="bg-primary-container/10 text-primary-container text-[0.6rem] font-black uppercase tracking-[0.2em] px-3 py-1">Priority 1</span>
            </div>
            <p className="text-[0.7rem] uppercase tracking-widest text-on-surface-variant">Precision Tech Components • 450kg</p>
          </div>

          {/* Map Placeholder */}
          <div className="aspect-square bg-surface-container-highest relative overflow-hidden group">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0eeU1p0l1uLDY6eMLhzdq0Pf_vZuY8MD1R42aneP4alXshB_FCBUF747ELbZubkdOk35PBmkFC4TsYQZO7OzXPY9RFmKxcSysBK61b-J_9bdHKnmFRjIYYWRzuho76BAWj19SxIWI9Z6WEfoco8gvZiA8khZsoqZMT1t6s_BuZJNKhVYFklPAKr9PKU6SOF5o9JTRP6AHMrzWBfBaNiwhmnXRwdAecmILrI9tS_WVhr2JqhMijOyGSHHhUnvJC-KxPczyafPQWDk"
              alt="Map"
              fill
              className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
            
            {/* Map Pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-primary-container relative">
                <div className="absolute inset-0 bg-primary-container animate-ping"></div>
              </div>
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="space-y-1">
                <p className="text-[0.6rem] font-bold text-primary-container uppercase tracking-widest hover:drop-shadow-md">Current Position</p>
                <p className="text-sm font-black text-white tracking-tight uppercase">Bight of Benin</p>
              </div>
              <button className="bg-white text-black p-3 hover:bg-primary-container hover:text-white transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-sm">fullscreen</span>
              </button>
            </div>
          </div>

          {/* Event Timeline */}
          <div className="space-y-8">
            <p className="text-[0.65rem] font-black uppercase tracking-[0.3em] text-outline">Event Log / Timeline</p>
            <div className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-surface-container-highest">
              
              <div className="relative pl-10">
                <div className="absolute left-0 top-1.5 w-6 h-6 bg-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-[14px] text-white">local_shipping</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black text-white tracking-tight uppercase">In Transit - Sea Sector</span>
                  <span className="text-[0.65rem] text-on-surface-variant">Oct 23, 2024 • 14:22 GMT</span>
                </div>
              </div>

              <div className="relative pl-10">
                <div className="absolute left-0 top-1.5 w-6 h-6 bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-[14px] text-on-surface-variant">check</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-on-surface-variant tracking-tight uppercase">Port Departure Clearance</span>
                  <span className="text-[0.65rem] text-on-surface-variant/60">Oct 22, 2024 • 09:10 GMT</span>
                </div>
              </div>

              <div className="relative pl-10">
                <div className="absolute left-0 top-1.5 w-6 h-6 bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-[14px] text-on-surface-variant">inventory_2</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-on-surface-variant tracking-tight uppercase">Consignment Received</span>
                  <span className="text-[0.65rem] text-on-surface-variant/60">Oct 21, 2024 • 18:00 GMT</span>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => alert("Generating full encrypted ledger...")}
            className="w-full border border-primary-container text-primary-container py-5 font-black text-xs uppercase tracking-[0.2em] hover:bg-primary-container hover:text-white transition-all"
          >
            Full Tracking Manifest
          </button>
        </motion.div>
      </aside>
    </main>
  );
}
