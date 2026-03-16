"use client";

import Image from 'next/image';
import { ArrowUpRight, Plus, CornerDownRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-[700px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[60%] rounded-full bg-[#FF4D8D]/30 blur-[100px]" />
        <div className="absolute top-[-5%] right-[10%] w-[40%] h-[50%] rounded-full bg-[#FF9D4D]/30 blur-[100px]" />
        <div className="absolute top-[15%] left-[30%] w-[40%] h-[50%] rounded-full bg-[#FFD64D]/20 blur-[100px]" />
      </div>

      {/* Sticky Glassmorphic Navbar */}
      <div className="sticky top-0 z-50 px-4 md:px-8 pt-4">
        <motion.header 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/40 backdrop-blur-2xl border border-white/50 rounded-b-[2rem] rounded-t-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] px-6 md:px-10 py-4 max-w-[1400px] mx-auto flex justify-between items-center"
        >
          <div className="font-serif text-2xl tracking-tight text-[#1A1A1A]">Radsfinds</div>
          <button className="w-10 h-10 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center hover:bg-[#FF4D8D] hover:scale-110 hover:rotate-90 transition-all duration-500 ease-out shadow-lg">
            <Plus size={20} />
          </button>
        </motion.header>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <motion.h1 
          initial={{ filter: 'blur(20px)', opacity: 0, y: 40 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight mb-10 text-[#1A1A1A]"
        >
          Radhika Khanna is a tech creator specializing in:
        </motion.h1>
        
        <motion.div 
          initial={{ filter: 'blur(20px)', opacity: 0, y: 40 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 text-base md:text-lg font-medium mb-16"
        >
          <span className="px-5 py-2 rounded-full bg-[#F3D5F5] text-[#7A2A82] shadow-sm hover:scale-105 transition-transform cursor-default">Tech Tips</span>
          <span className="px-5 py-2 rounded-full bg-[#CBE4F9] text-[#2A5A82] shadow-sm hover:scale-105 transition-transform cursor-default">Gadgets</span>
          <span className="px-5 py-2 rounded-full bg-[#F9D8B6] text-[#824A1A] shadow-sm hover:scale-105 transition-transform cursor-default">Tutorials</span>
          <span className="px-5 py-2 rounded-full bg-[#F9F0B6] text-[#827A1A] shadow-sm hover:scale-105 transition-transform cursor-default">Smart Hacks</span>
        </motion.div>

        <motion.div
          initial={{ filter: 'blur(20px)', opacity: 0, scale: 0.9 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <a href="mailto:hello.radsfinds@gmail.com" className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-500 ease-out bg-[#1A1A1A] rounded-full hover:scale-110 hover:shadow-[0_0_40px_rgba(255,77,141,0.5)] overflow-hidden">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#FF4D8D] via-[#FF9D4D] to-[#FFD64D] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
            <span className="absolute inset-[2px] bg-[#1A1A1A] rounded-full"></span>
            <span className="relative flex items-center gap-2 text-lg">Let's get to work <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" /></span>
          </a>
        </motion.div>
      </section>

      {/* Selected Works */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ filter: 'blur(20px)', opacity: 0, x: -40 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Top Finds</h2>
          <a 
            href="https://instagram.com/radsfinds" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#1A1A1A] text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#FF4D8D] hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            View All <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div 
            initial={{ filter: 'blur(20px)', opacity: 0, y: 60 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-5 bg-gray-200 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:shadow-[0_20px_40px_rgba(255,77,141,0.25)] group-hover:-translate-y-4">
              <Image 
                src="https://picsum.photos/seed/desksetup/800/600" 
                alt="Desk Setup" 
                fill 
                className="object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:rotate-2 group-hover:blur-[2px] group-hover:brightness-90" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#1A1A1A] shadow-xl">
                  <ArrowUpRight size={32} />
                </div>
              </div>

              <div className="absolute top-5 left-5 flex gap-2 z-20 transition-transform duration-500 group-hover:-translate-y-1">
                <span className="px-4 py-1.5 rounded-full bg-[#CBE4F9]/95 backdrop-blur-md text-xs font-semibold text-[#2A5A82] shadow-sm">Gadgets</span>
                <span className="px-4 py-1.5 rounded-full bg-[#F9F0B6]/95 backdrop-blur-md text-xs font-semibold text-[#827A1A] shadow-sm">Setup</span>
              </div>
            </div>
            <h3 className="text-xl font-medium transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#FF4D8D]">Ultimate Desk Setup Upgrade</h3>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ filter: 'blur(20px)', opacity: 0, y: 60 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-5 bg-gray-200 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:shadow-[0_20px_40px_rgba(255,157,77,0.25)] group-hover:-translate-y-4">
              <Image 
                src="https://picsum.photos/seed/phoneacc/800/600" 
                alt="Phone Accessories" 
                fill 
                className="object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:-rotate-2 group-hover:blur-[2px] group-hover:brightness-90" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#1A1A1A] shadow-xl">
                  <ArrowUpRight size={32} />
                </div>
              </div>

              <div className="absolute top-5 left-5 flex gap-2 z-20 transition-transform duration-500 group-hover:-translate-y-1">
                <span className="px-4 py-1.5 rounded-full bg-[#F3D5F5]/95 backdrop-blur-md text-xs font-semibold text-[#7A2A82] shadow-sm">Accessories</span>
              </div>
            </div>
            <h3 className="text-xl font-medium transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#FF9D4D]">Must-Have iPhone Accessories</h3>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ filter: 'blur(20px)', opacity: 0, y: 60 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-5 bg-gray-200 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:shadow-[0_20px_40px_rgba(255,214,77,0.25)] group-hover:-translate-y-4">
              <Image 
                src="https://picsum.photos/seed/smarthome/800/600" 
                alt="Smart Home" 
                fill 
                className="object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:rotate-2 group-hover:blur-[2px] group-hover:brightness-90" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#1A1A1A] shadow-xl">
                  <ArrowUpRight size={32} />
                </div>
              </div>

              <div className="absolute top-5 left-5 flex gap-2 z-20 transition-transform duration-500 group-hover:-translate-y-1">
                <span className="px-4 py-1.5 rounded-full bg-[#F9D8B6]/95 backdrop-blur-md text-xs font-semibold text-[#824A1A] shadow-sm">Tutorials</span>
              </div>
            </div>
            <h3 className="text-xl font-medium transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#FFD64D]">Smart Home Automation Hack</h3>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-gray-300/60 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
          <motion.div 
            initial={{ filter: 'blur(20px)', opacity: 0, x: -40 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-3"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider flex items-center gap-2 text-[#1A1A1A]">
              <CornerDownRight size={16} className="text-[#FF4D8D]" /> About Radsfinds
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ filter: 'blur(20px)', opacity: 0, y: 40 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="md:col-span-4"
          >
            <h3 className="text-2xl md:text-3xl font-medium mb-6">The Mission</h3>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              I'm obsessed with finding the best tech and sharing it with you. My approach is simple: test rigorously, review honestly, and share the magic. I dive deep into premium gadgets, cool accessories, and smart hacks to elevate your digital life.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ filter: 'blur(20px)', opacity: 0, y: 40 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-4 md:col-start-9"
          >
            <h3 className="text-2xl md:text-3xl font-medium mb-6">The Stats</h3>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">
              Join a growing community of tech enthusiasts. From content creation tips to the latest gadgets, we've got you covered.
            </p>
            
            <div className="space-y-5 text-base">
              <div className="flex justify-between border-b border-gray-300/60 pb-4 group hover:border-[#FF4D8D] transition-colors">
                <span className="text-gray-500 group-hover:text-[#1A1A1A] transition-colors">Followers</span>
                <span className="font-medium">8,932+</span>
              </div>
              <div className="flex justify-between border-b border-gray-300/60 pb-4 group hover:border-[#FF9D4D] transition-colors">
                <span className="text-gray-500 group-hover:text-[#1A1A1A] transition-colors">Posts</span>
                <span className="font-medium">36+</span>
              </div>
              <div className="flex justify-between border-b border-gray-300/60 pb-4 group hover:border-[#FFD64D] transition-colors">
                <span className="text-gray-500 group-hover:text-[#1A1A1A] transition-colors">Niche</span>
                <span className="font-medium">Tech & Creation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
