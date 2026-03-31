"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LastMileService() {
  return (
    <main>
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <Image 
            className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000" 
            alt="Delivery motorcycle rider Lagos" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR2MKZ-Sd2WQ7-QCfQR_vkE7Gj4amsDODZ4FJ26uClshAh_uCORwNuJbzrut4QwFXrLNUxU8f-aSeKYqQEYZ7UBzZVN7hHcec3a88OYNRxlGKgnbwbr7onMT_gUgZ9nfiF_TscQuLky05P-jFWbLhqDoVQk4iCtjaKHgsVIpVF3lkm5SZKGY4zhKOoJpL_WIst_ySDsI8Ge3NOrak07KAH6ycS7MeZixW57dUEXO8JGidYLY_qUhh56Dg7p4VrFdFll5Ozii1ltu4"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-12 w-full max-w-[1440px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl"
          >
            <span className="text-primary-container font-black tracking-[0.3em] uppercase text-xs mb-4 block">Precision Engineered Mobility</span>
            <h1 className="text-[3.5rem] md:text-[6rem] font-black leading-[0.95] tracking-tighter text-white mb-8">
              MASTERING THE<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-inverse-primary">FINAL STRETCH.</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed mb-10 border-l-4 border-primary-container pl-8">
              The last mile is the most complex. We navigate the pulse of Lagos with surgical precision, ensuring your critical cargo arrives exactly when it matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/booking">
                <button className="bg-primary-container hover:bg-inverse-primary text-white px-10 py-5 font-bold uppercase tracking-widest text-sm transition-all whitespace-nowrap">
                  Initiate Shipment
                </button>
              </Link>
              <Link href="/tracking">
                <button className="border border-outline-variant/30 hover:border-primary-container text-white px-10 py-5 font-bold uppercase tracking-widest text-sm transition-all whitespace-nowrap">
                  View Analytics
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Core Competencies: Bento Grid */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Urban Expertise */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-7 bg-surface p-12 relative overflow-hidden group">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary-container text-4xl mb-6">location_city</span>
                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Urban Expertise</h3>
                <p className="text-on-surface-variant leading-relaxed max-w-md">
                  Lagos is a labyrinth. Our agents possess hyper-local intelligence, utilizing proprietary mapping technology to bypass gridlock and navigate the specific nuances of Ikeja, Victoria Island, and Lekki.
                </p>
              </div>
              <div className="absolute -right-12 -bottom-12 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[15rem]">map</span>
              </div>
            </motion.div>

            {/* Same-Day Delivery */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="md:col-span-5 bg-primary-container p-12 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-white text-4xl mb-6">bolt</span>
                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Same-Day Delivery</h3>
              </div>
              <p className="text-on-primary-container font-medium text-lg leading-relaxed mt-12 md:mt-0">
                In the kinetic rhythm of business, tomorrow is too late. Our zero-lag protocol ensures same-day completion for all intra-city freight.
              </p>
            </motion.div>

            {/* Real-Time Updates */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="md:col-span-5 bg-surface-container-highest p-12 flex flex-col justify-between relative overflow-hidden">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6">sensors</span>
                <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Real-Time<br/>Updates</h2>
              </div>
              <p className="text-on-surface-variant leading-relaxed mt-12 md:mt-0">
                Full transparency through live telemetry. Monitor every vibration, temperature shift, and coordinate change in real-time via our secure architectural dashboard.
              </p>
            </motion.div>

            {/* Visual Anchor */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="md:col-span-7 h-[400px] bg-surface-container relative">
              <Image 
                className="object-cover grayscale opacity-80" 
                alt="3D digital map of Lagos" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQJ30sf1qxAse6M-adUKIR0GzZQ_1r6z0zLDl9u-gCMJwts2VqJ9iRCRD0wwWkJlWAf2QSxa27SiNLwvO5pTMwHURDAw9K1wRPisZASloBGwKwJzi391ngPUg9qu2Ujilu5k5r_woTO7_NVluaaDR04B8TiPWK6br5vRw3s3lofuU_fkvZekvN_sy2g7ZZ02KyS52YiXaWEXXYZOQfK-ByfyFzKoPrx1H_erXTHl4bzTZm9yj4bCgt3XCuPFbVhu4NuzKGwO_Ti1c"
                fill
              />
              <div className="absolute inset-0 bg-primary-container/10 mix-blend-multiply"></div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full md:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 border-l-4 border-t-4 border-primary-container/30"></div>
              <div className="relative aspect-square w-full">
                <Image 
                  className="object-cover grayscale" 
                  alt="Ikeja Lagos Skyscraper" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYdtxPUNdRauMMJVnV6dZbFhIgKzb0XGFF3ZxA3GArTA38nbMpC3U4cGQ9AU9eNY7nU0XobBy4cbHolpnns7z3GumV72YU0vFNTO3g9C_U7Yxb171ICjF6Z_C7U6R9iPJl9mh8d2zBJuvSP4hIKM42Qc3UGfV4laVIMLY5fv20sDRjqkWiIm9sG1ebNug31qn0MuZ7YdiR9AyiHXq0PIedYD1U-oeoAy1lZmjENDg6PeSIY0AVTwLSYdPSlq5Ejgyr-whujfDpm-8"
                  fill
                />
              </div>
              <div className="absolute bottom-8 right-8 bg-surface p-8 max-w-xs outline-variant/10 outline">
                <p className="text-primary-container font-black text-4xl mb-2">99.8%</p>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">On-Time Accuracy</p>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full md:w-1/2">
              <span className="text-primary-container font-black tracking-widest uppercase text-xs mb-6 block">Case Study // Ikeja Industrial Zone</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tighter uppercase">
                REDEFINING PRECISION FOR GLOBAL PHARMA
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                When a leading pharmaceutical giant required the urgent transport of temperature-sensitive vaccines across the congested Ikeja district, Kinetic Logistics deployed a specialized tactical unit. 
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
                  <div>
                    <p className="text-white font-bold uppercase tracking-tight">The Challenge</p>
                    <p className="text-on-surface-variant text-sm">Navigating 5km of peak gridlock in under 45 minutes without breaking cold-chain protocols.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
                  <div>
                    <p className="text-white font-bold uppercase tracking-tight">The Result</p>
                    <p className="text-on-surface-variant text-sm">Delivery completed in 32 minutes. Zero temperature deviation recorded throughout the transit.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-surface-container-low relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            <div className="border-r border-white/20"></div><div className="border-r border-white/20"></div><div className="border-r border-white/20"></div><div className="border-r border-white/20"></div><div className="border-r border-white/20"></div><div className="border-r border-white/20"></div><div className="border-r border-white/20"></div><div className="border-r border-white/20"></div><div className="border-r border-white/20"></div><div className="border-r border-white/20"></div><div className="border-r border-white/20"></div><div className="border-r border-white/20"></div>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-[1440px] mx-auto px-12 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-12 uppercase tracking-tighter">
            READY TO <span className="text-primary-container">OPTIMIZE?</span>
          </h2>
          <p className="text-on-surface-variant text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
            Let us re-engineer your logistics chain. From last-mile delivery to global freight management, precision is our only standard.
          </p>
          <Link href="/booking">
            <button className="group relative inline-flex items-center gap-6 bg-white text-background px-16 py-8 font-black uppercase tracking-[0.2em] hover:bg-primary-container hover:text-white transition-all duration-300">
              Partner with Us
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
