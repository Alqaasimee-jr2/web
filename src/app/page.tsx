"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-background">
          <Image 
            alt="Logistics fleet" 
            className="w-full h-full object-cover opacity-40 grayscale-[0.5] contrast-125" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQvS5A-FSNcBT-QBj-GOuPb96v6LqPAvi2C7Arl0CCNp-PQXZz-jpx5tuB0eAtH8diogKQ-yoToqLOGq4pmg98Qn2PLPRyL-SOkjjdcpN7XQKPaOqYTzglvYbjCA3cGukh3BCahv-fkLIQubhX1MwOvetZFL68AZW55fils_5Ub_xNsEVFbbSke0br7a0G9EwFedSxyQeSZOm6aR0rMpjwC3zZbXWN4FRbyFPpVPb1DaAWUcLei-dIV3hQTYR3yE3i6nEBFA61PTo"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-6 md:px-12 w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8"
          >
            <div className="inline-block bg-primary-container px-3 py-1 mb-6">
              <span className="text-[10px] font-black tracking-[0.3em] text-white uppercase">Lagos Prime Logistics</span>
            </div>
            <h1 className="text-[3.5rem] md:text-[5rem] font-black leading-[0.95] tracking-tighter text-white mb-8">
              PRECISION<br/>LOGISTICS,<br/>
              <span className="text-primary-container">LAST MILE</span><br/>PERFECTION.
            </h1>
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl">
              <div className="flex-grow relative">
                <input 
                  className="w-full bg-surface-container-highest border-none text-white px-6 py-5 focus:ring-0 focus:border-b-2 focus:border-primary-container transition-all outline-none" 
                  placeholder="ENTER TRACKING NUMBER" 
                  type="text"
                />
              </div>
              <Link href="/tracking" className="inline-block">
                <button className="h-full w-full precision-gradient text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
                  Track Shipment
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section: Asymmetric Bento Grid */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
          >
            <h2 className="text-[1.75rem] font-bold text-white tracking-tighter max-w-md">
                ENGINEERED SOLUTIONS FOR GLOBAL &amp; LOCAL MOVEMENT.
            </h2>
            <p className="text-on-surface-variant max-w-sm text-sm leading-relaxed">
                From the bustling streets of Ikeja to the high-seas of international trade, we apply architectural precision to every payload.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Card 1 */}
            <Link href="/services/last-mile">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group bg-surface-container-low p-12 min-h-[450px] flex flex-col justify-between hover:bg-surface-container-high transition-colors"
              >
                <div>
                  <span className="material-symbols-outlined text-primary-container text-5xl mb-8">local_shipping</span>
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight">LAST MILE DELIVERY</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                      Hyper-local expertise within Lagos state, ensuring same-day precision for high-value retail and industrial equipment.
                  </p>
                </div>
                <div className="pt-8 flex items-center gap-4 group-hover:gap-6 transition-all text-primary-container font-bold text-xs tracking-widest uppercase cursor-pointer">
                    Explore Service <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </motion.div>
            </Link>

            {/* Card 2 */}
            <Link href="/services/last-mile">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group bg-surface-container p-12 min-h-[450px] flex flex-col justify-between hover:bg-surface-container-high transition-colors"
              >
                <div>
                  <span className="material-symbols-outlined text-primary-container text-5xl mb-8">manage_accounts</span>
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight">FLEET MANAGEMENT</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                      Advanced telematics and maintenance protocols for corporate fleets. We manage the assets; you manage the growth.
                  </p>
                </div>
                <div className="pt-8 flex items-center gap-4 group-hover:gap-6 transition-all text-primary-container font-bold text-xs tracking-widest uppercase cursor-pointer">
                    Explore Service <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </motion.div>
            </Link>

            {/* Card 3 */}
            <Link href="/services/last-mile">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group bg-surface-container-low p-12 min-h-[450px] flex flex-col justify-between hover:bg-surface-container-high transition-colors"
              >
                <div>
                  <span className="material-symbols-outlined text-primary-container text-5xl mb-8">public</span>
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight">GLOBAL FREIGHT</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                      Seamless air and sea freight integration connecting Lagos to the world&apos;s primary industrial hubs with total transparency.
                  </p>
                </div>
                <div className="pt-8 flex items-center gap-4 group-hover:gap-6 transition-all text-primary-container font-bold text-xs tracking-widest uppercase cursor-pointer">
                    Explore Service <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us: Spatial Separation */}
      <section className="py-32 bg-surface-container-lowest overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-container/10 blur-[100px]"></div>
            <div className="relative z-10 w-full h-[600px] border-l-4 border-primary-container">
              <Image 
                alt="Precision Tracking" 
                className="object-cover grayscale brightness-75" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5blPXnKQPkvcAV8GixX1c3TtZl-oxS9QVoxydF7TDdZaEPiB-Z5COR161FTGuHDHs7CnGj4A6wHR7RC457wcURxpyA1BY8pQU4VGkmmb98PHtG6CT0GpH9QU1PVgOIdglfHnhh56TyzzgwX5bU57LkpqJm33WJe1hF5Z64WD_RtdjxzgNQ2pBAQw-TMGRFUA6ny1KHCrPdHz5SMbD5ZTvdrRUiUxJ6EZTlPT7xgYHpc3pxHB8ro1JyE9gGHn1iXmlqhPycAB4edc"
                fill
              />
            </div>
          </motion.div>
          
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[3rem] font-black text-white leading-none tracking-tighter mb-8 uppercase">WHY KINETIC?</h2>
              <div className="w-24 h-1 bg-primary-container"></div>
            </motion.div>
            
            <div className="space-y-12">
              {[
                { num: "01", title: "Ikeja Expertise", desc: "Our headquarters in Ikeja provides us with unmatched tactical knowledge of Lagos' primary commercial artery and logistical bypasses." },
                { num: "02", title: "Real-Time Tracking", desc: "Every parcel is a data point. Our proprietary Kinetic-Link software provides millisecond-accurate positioning for every asset." },
                { num: "03", title: "Uncompromising Security", desc: "Multi-layered verification protocols and armored transit options for high-ticket consignments that require absolute protection." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex gap-8"
                >
                  <span className="text-primary-container font-black text-4xl leading-none">{item.num}</span>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section: Premium Form */}
      <section className="py-32 px-6 md:px-12 bg-surface relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-[1000px] mx-auto bg-surface-container-low border-t-4 border-primary-container p-12 md:p-20 relative z-10"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase">Experience the Difference</h2>
            <p className="text-on-surface-variant tracking-widest text-xs font-bold uppercase">Ready to optimize your supply chain?</p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-on-surface-variant tracking-widest uppercase">Full Name</label>
              <input className="w-full bg-surface-container-highest border-none text-white p-4 focus:ring-0 focus:border-b-2 focus:border-primary-container transition-all outline-none" placeholder="JOHN DOE" type="text"/>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-on-surface-variant tracking-widest uppercase">Email Address</label>
              <input className="w-full bg-surface-container-highest border-none text-white p-4 focus:ring-0 focus:border-b-2 focus:border-primary-container transition-all outline-none" placeholder="J.DOE@ENTERPRISE.COM" type="email"/>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-on-surface-variant tracking-widest uppercase">Service Type</label>
              <select className="w-full bg-surface-container-highest border-none text-white p-4 focus:ring-0 focus:border-b-2 focus:border-primary-container transition-all appearance-none outline-none">
                <option>GLOBAL FREIGHT</option>
                <option>LAST MILE DELIVERY</option>
                <option>FLEET MANAGEMENT</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-on-surface-variant tracking-widest uppercase">Estimated Load (KG)</label>
              <input className="w-full bg-surface-container-highest border-none text-white p-4 focus:ring-0 focus:border-b-2 focus:border-primary-container transition-all outline-none" placeholder="0.00" type="number"/>
            </div>
            <div className="md:col-span-2 pt-8">
              <button 
                type="submit" 
                onClick={(e) => {
                  e.preventDefault();
                  const btn = e.currentTarget;
                  btn.innerHTML = '<span class="material-symbols-outlined animate-spin align-middle mr-2">sync</span> PROCESSING REQUEST...';
                  setTimeout(() => {
                    btn.innerHTML = '<span class="material-symbols-outlined align-middle mr-2">check_circle</span> ROUTING TO DISPATCH';
                    btn.classList.replace('precision-gradient', 'bg-white');
                    btn.classList.add('text-black');
                    window.location.href = 'https://wa.me/2349019597944?text=Hello%20Kinetic%20Logistics.%20I%20am%20interested%20in%20requesting%20a%20professional%20consultation.';
                  }, 1200);
                }}
                className="w-full precision-gradient text-white py-6 font-black uppercase tracking-[0.3em] text-sm hover:scale-[0.99] transition-transform"
              >
                  Request Professional Consultation
              </button>
            </div>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
