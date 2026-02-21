import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ParticleHand } from './3d/ParticleHand';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#990000] text-[#e8e8e3] min-h-screen py-24 px-6 flex flex-col justify-between overflow-hidden">
      
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-screen">
         <Canvas camera={{ position: [0, 0, 20] }}>
             <ParticleHand color="white" />
         </Canvas>
      </div>

      <div className="container mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row justify-between mb-24">
            <div className="max-w-sm">
                <h3 className="font-bold text-3xl mb-8 uppercase">For All Questions</h3>
                <div className="space-y-4 font-mono text-sm">
                    <div>
                        <span className="block opacity-50 text-xs mb-1">E-MAIL</span>
                        <a href="#" className="hover:underline">FRIENDS@AVA-DIGITAL.RU</a>
                    </div>
                    <div>
                        <span className="block opacity-50 text-xs mb-1">TELEGRAM</span>
                        <a href="#" className="hover:underline">@MEDICINA_RU</a>
                    </div>
                </div>
            </div>

            <div className="mt-12 md:mt-0 text-right">
                <div className="font-mono text-xs uppercase mb-4 opacity-50">Socials</div>
                <ul className="text-4xl md:text-6xl font-black uppercase space-y-2">
                    <li className="hover:opacity-50 transition-opacity cursor-pointer">Instagram</li>
                    <li className="hover:opacity-50 transition-opacity cursor-pointer">Telegram</li>
                    <li className="hover:opacity-50 transition-opacity cursor-pointer">Youtube</li>
                </ul>
                <div className="mt-8 pt-8 border-t border-white/20">
                     <ul className="text-2xl font-bold uppercase space-y-2">
                        <li className="hover:opacity-50 transition-opacity cursor-pointer">Behance</li>
                        <li className="hover:opacity-50 transition-opacity cursor-pointer">Dprofile</li>
                     </ul>
                </div>
            </div>
        </div>

        <div className="border-t border-white/30 pt-4 flex flex-col md:flex-row justify-between items-end">
             <h1 className="text-[15vw] leading-none font-black tracking-tighter opacity-90">
                 AVA SRG'
             </h1>
             <div className="font-mono text-xs mb-4 md:mb-8 text-right">
                 PRIVACY POLICY <br/>
                 CONSENT TO THE PROCESSING OF PERSONAL DATA
             </div>
        </div>
      </div>
    </footer>
  );
};