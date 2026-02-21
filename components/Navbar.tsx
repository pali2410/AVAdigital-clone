import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    const interval = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Top Left */}
      <div className="fixed top-6 left-6 z-40 font-mono text-xs md:text-sm mix-blend-difference text-white pointer-events-none">
        FRIEND@AVA-DIGITAL.RU
      </div>

      {/* Top Center - Time */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-40 font-mono text-xs md:text-sm mix-blend-difference text-white pointer-events-none hidden md:block">
        SPB_RU_{time}
      </div>

      {/* Top Right */}
      <div className="fixed top-6 right-6 z-40 font-mono text-xs md:text-sm mix-blend-difference text-white cursor-pointer pointer-events-auto hover:opacity-70 transition-opacity">
        EN / RU
      </div>

      {/* Floating Menu Center */}
      <motion.div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="bg-black text-white px-4 py-2 rounded-full flex gap-4 md:gap-8 items-center pointer-events-auto shadow-2xl scale-75 md:scale-100 origin-center border border-white/10">
            <span className="font-mono text-xs hover:text-red-500 cursor-pointer transition-colors">[ PROJECTS ]</span>
            <span className="font-mono text-xs hover:text-red-500 cursor-pointer transition-colors">ABOUT</span>
            <span className="font-mono text-xs hover:text-red-500 cursor-pointer transition-colors">TEAM</span>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <span className="font-mono text-xs hover:text-red-500 cursor-pointer transition-colors">PROGRAM</span>
            <span className="font-mono text-xs hover:text-red-500 cursor-pointer transition-colors">REVIEWS</span>
            <span className="font-mono text-xs bg-red-600 px-2 py-1 rounded text-white hover:bg-red-700 cursor-pointer transition-colors">CONTACT</span>
        </div>
      </motion.div>

      {/* Bottom Sticky Elements */}
      <div className="fixed bottom-6 left-6 z-40 font-mono text-xs mix-blend-difference text-white pointer-events-none hidden md:block">
         0652 X 3336 M
      </div>
      <div className="fixed bottom-6 right-6 z-40 font-mono text-xs mix-blend-difference text-white pointer-events-none">
         © 2026
      </div>

      {/* Right Side Sticky Widget */}
      <div className="fixed right-0 top-1/3 z-30 hidden lg:flex flex-col gap-4 items-end pr-4">
        <div className="w-48 bg-[#e5e5e5] border border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-xs uppercase leading-tight">Animation fast track<br/>by AVA SRG</h3>
            </div>
            <div className="flex justify-between items-center border-t border-black pt-2 mt-2">
                <span className="font-mono text-[10px] uppercase">Animation Course</span>
                <span className="font-mono text-[10px]">SOON</span>
            </div>
        </div>
      </div>
    </>
  );
};