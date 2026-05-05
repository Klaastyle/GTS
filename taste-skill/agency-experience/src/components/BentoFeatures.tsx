import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Infinity, Lightning, ShieldCheck } from '@phosphor-icons/react';

const Card = ({ children, className, title, desc }: { children: React.ReactNode, className: string, title: string, desc: string }) => (
  <div className={`p-1 ${className}`}>
    <div className="premium-card h-full flex flex-col justify-between overflow-hidden group">
      <div className="relative z-10 flex-1">
        {children}
      </div>
      <div className="mt-8 transition-transform duration-500 group-hover:translate-x-1">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  </div>
);

export const BentoFeatures = () => {
  return (
    <section className="py-24 px-6 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-2xl">
          <span className="text-accent font-mono text-sm uppercase tracking-widest block mb-4">Core Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-medium">Bento 2.0 Engine</h2>
        </div>
        <p className="text-zinc-500 max-w-[30ch]">
          Optimized for high-performance and perpetual kinetic interactions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        {/* Row 1: 3 Columns */}
        <Card 
          className="md:col-span-4 h-[400px]" 
          title="Hardware Accel" 
          desc="Optimized for 60fps across all modern GPU-enabled browsers."
        >
          <div className="flex items-center justify-center h-full">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="text-accent opacity-20"
            >
              <Cpu size={120} weight="thin" />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-accent"
              >
                <Lightning size={60} weight="fill" />
              </motion.div>
            </div>
          </div>
        </Card>

        <Card 
          className="md:col-span-4 h-[400px]" 
          title="Global Reach" 
          desc="Distributed edge computing infrastructure for sub-100ms latency."
        >
          <div className="flex items-center justify-center h-full relative">
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-40 h-40 border border-accent/20 rounded-full"
            />
            <div className="absolute">
              <Globe size={64} className="text-zinc-100" weight="duotone" />
            </div>
          </div>
        </Card>

        <Card 
          className="md:col-span-4 h-[400px]" 
          title="Infinite Loops" 
          desc="Perpetual micro-interactions that keep the UI alive."
        >
          <div className="flex flex-col gap-4 mt-10">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                className="h-12 w-full bg-zinc-800/50 rounded-xl border border-white/5 flex items-center px-4 gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div className="h-2 w-24 bg-zinc-700 rounded-full" />
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Row 2: 70/30 split */}
        <Card 
          className="md:col-span-8 h-[400px]" 
          title="Security Architecture" 
          desc="Military-grade encryption following strict Zero-Trust paradigms."
        >
          <div className="flex items-center justify-around h-full pt-10">
            <div className="relative">
              <ShieldCheck size={160} weight="thin" className="text-zinc-800" />
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
                className="absolute inset-0 bg-accent/5 blur-xl"
              />
            </div>
            <div className="hidden sm:grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square w-16 bg-zinc-900 border border-white/5 rounded-2xl flex items-center justify-center">
                  <div className="w-6 h-1 bg-zinc-800 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card 
          className="md:col-span-4 h-[400px]" 
          title="Liquid Scaling" 
          desc="Auto-responsive layouts that adapt to any viewport."
        >
          <div className="flex items-center justify-center h-full">
            <motion.div
              animate={{ 
                borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"] 
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="w-48 h-48 bg-accent/10 border border-accent/20 flex items-center justify-center"
            >
              <Infinity size={48} className="text-accent" />
            </motion.div>
          </div>
        </Card>
      </div>
    </section>
  );
};
