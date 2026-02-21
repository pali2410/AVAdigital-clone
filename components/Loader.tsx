import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onLoadingComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Non-linear increment for realism
        const increment = Math.random() * 15;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        onLoadingComplete();
      }, 1000); // Hold at 100% for a moment
    }
  }, [progress, onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[#1a1a1a] flex flex-col items-center justify-center text-[#e5e5e5] font-mono"
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="absolute top-10 left-10 text-xs opacity-50">
        0000 X 3336 M
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        {/* Abstract ASCII-like floating characters */}
        <motion.div 
            className="mb-12 text-sm space-y-1 opacity-70"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
        >
            <div>S K</div>
            <div>R G</div>
            <div>S G</div>
        </motion.div>

        <div className="text-4xl md:text-6xl font-bold mb-4">
          {Math.floor(progress)}%
        </div>
      </div>

      {progress === 100 && (
         <motion.div 
            className="absolute inset-0 flex items-center justify-between px-10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
         >
            <span className="text-[10vw] font-bold opacity-10">WE</span>
            <span className="text-[10vw] font-bold opacity-10">ARE</span>
         </motion.div>
      )}

      <div className="absolute bottom-10 right-10 text-xs opacity-50">
        © 2024
      </div>
    </motion.div>
  );
};