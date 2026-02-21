import React, { useState, useEffect } from 'react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Smooth scroll behavior for the document
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#e8e8e3] text-[#1a1a1a] overflow-x-hidden selection:bg-red-600 selection:text-white">
      <AnimatePresence mode="wait">
        {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main className="relative">
          <Navbar />
          
          <div className="relative z-10">
            <Hero />
            <Philosophy />
            
            {/* Stats / Marquee Section */}
            <section className="bg-black text-white py-4 overflow-hidden">
                <div className="animate-marquee whitespace-nowrap flex gap-12 text-sm font-mono uppercase">
                    <span>Animation Fast Track</span>
                    <span>•</span>
                    <span>3.5 Months Duration</span>
                    <span>•</span>
                    <span>30+ Hours of Practice</span>
                    <span>•</span>
                    <span>Real Feedback</span>
                    <span>•</span>
                    <span>Animation Fast Track</span>
                    <span>•</span>
                    <span>3.5 Months Duration</span>
                    <span>•</span>
                    <span>30+ Hours of Practice</span>
                    <span>•</span>
                    <span>Real Feedback</span>
                </div>
            </section>
            
            <Team />
            <Footer />
          </div>
        </main>
      )}

      <style>{`
        .animate-marquee {
            animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default App;