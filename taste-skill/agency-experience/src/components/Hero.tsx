import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight, PlayCircle } from '@phosphor-icons/react';

export const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title-span', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'expo.out',
        delay: 0.2
      });

      gsap.from(imageRef.current, {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-32 pb-20 px-6 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
        {/* Left Side: Content */}
        <div ref={textRef} className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-accent text-sm font-mono tracking-widest uppercase">Digital Ecosystem 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] mb-8 overflow-hidden">
            <span className="hero-title-span inline-block">Engineering</span><br />
            <span className="hero-title-span inline-block bg-gradient-to-r from-zinc-100 to-zinc-500 bg-clip-text text-transparent italic">
              Atmospheres.
            </span>
          </h1>

          <p className="text-zinc-500 text-lg md:text-xl max-w-[45ch] mb-12 leading-relaxed">
            We architect high-fidelity digital experiences that override standard biases. 
            Built for the brave, designed for the future.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button className="group flex items-center gap-2 bg-accent text-background px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition-all active:scale-95">
              Explore Work
              <ArrowUpRight size={20} weight="bold" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button className="flex items-center gap-3 text-zinc-100 hover:text-accent transition-colors font-medium">
              <PlayCircle size={32} />
              Watch Reel
            </button>
          </div>
        </div>

        {/* Right Side: Visual Asset (Asymmetric) */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0">
          <div 
            ref={imageRef}
            className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-zinc-900 border border-white/5 relative z-10"
          >
            <img 
              src="https://picsum.photos/seed/experience/800/1000" 
              alt="Conceptual Space" 
              className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-[80px]" />
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
        </div>
      </div>
    </section>
  );
};
