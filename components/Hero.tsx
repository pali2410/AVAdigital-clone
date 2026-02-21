import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ParticleHand } from './3d/ParticleHand';
import { motion, useScroll, useTransform } from 'framer-motion';

// Add type definitions for R3F elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      pointLight: any;
    }
  }
}

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen w-full bg-[#e8e8e3] overflow-hidden flex flex-col justify-between pt-24 pb-12 box-border">
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-multiply pointer-events-none">
        <Canvas camera={{ position: [0, 0, 18], fov: 35 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <ParticleHand />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="container mx-auto px-6 z-10 relative h-full flex flex-col justify-between">
        
        {/* Top Text */}
        <div className="flex justify-between items-start">
            <div className="max-w-md">
                <p className="font-mono text-xs mb-4 uppercase">[ Mission ]</p>
                <h1 className="text-xl md:text-2xl font-medium leading-tight mb-6">
                    Real-world experience and professional development with AVA Digital mentors. 
                    We teach you how to create real designs, not just theory.
                </h1>
                <button className="border-b border-black pb-1 text-sm font-bold uppercase hover:text-red-600 transition-colors">
                    Contact Us ↗
                </button>
            </div>
            
            {/* Stamp/Badge */}
            <motion.div 
                className="hidden md:block"
                style={{ y: y1, opacity }}
            >
                <div className="w-32 h-32 rounded-full border border-black flex items-center justify-center relative animate-[spin_10s_linear_infinite]">
                    <svg viewBox="0 0 100 100" className="w-full h-full absolute">
                        <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent"/>
                        <text className="text-[8px] font-mono uppercase tracking-widest">
                            <textPath href="#curve">
                                Website of the day • Awwwards • css design •
                            </textPath>
                        </text>
                    </svg>
                    <div className="w-20 h-20 bg-[#c44d4d] rounded-full flex items-center justify-center text-white font-bold text-xs text-center leading-none">
                        BEST<br/>WEBSITE
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Bottom Giant Typography */}
        <div className="w-full">
            <h1 className="text-[18vw] leading-[0.8] font-black tracking-tighter text-center mix-blend-difference text-[#222]">
                AVA SRG
            </h1>
        </div>

      </div>
    </section>
  );
};