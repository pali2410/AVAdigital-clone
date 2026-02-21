import React from 'react';
import { motion } from 'framer-motion';

export const Philosophy: React.FC = () => {
  const sentence = "WE ARE YOUR CONSULTANTS, MENTORS, AND BUSINESS PARTNERS.".split(" ");

  return (
    <section className="bg-[#e8e8e3] py-24 px-6 min-h-screen flex items-center justify-center relative overflow-hidden">
       {/* Background Grid Lines */}
       <div className="absolute inset-0 flex justify-between pointer-events-none opacity-10 px-6">
          <div className="w-px h-full bg-black"></div>
          <div className="w-px h-full bg-black"></div>
          <div className="w-px h-full bg-black"></div>
       </div>

       <div className="max-w-6xl mx-auto z-10">
          <p className="font-mono text-xs uppercase mb-8">[ Our Philosophy ]</p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {sentence.map((word, i) => (
                <motion.span
                    key={i}
                    className="text-4xl md:text-7xl font-bold uppercase"
                    initial={{ opacity: 0.1, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {word}
                </motion.span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
             <div className="font-mono text-sm leading-relaxed">
                 The AVA Digital team has created over a hundred projects for companies in various fields.
                 We have found the perfect balance between creative freedom and the strict business objectives of our clients.
             </div>
             <div className="font-mono text-sm leading-relaxed">
                 Now we want to teach designers to find this balance in their own work. Your success is our success.
             </div>
          </div>
       </div>
    </section>
  );
};