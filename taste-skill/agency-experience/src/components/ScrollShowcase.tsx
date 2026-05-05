import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const ScrollShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { x: 0 },
      {
        x: '-200vw',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '2000 top',
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section ref={triggerRef} className="overflow-hidden">
      <div ref={sectionRef} className="flex h-screen w-[300vw]">
        <div className="h-full w-screen flex items-center justify-center px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full max-w-[1400px]">
            <div>
              <span className="text-zinc-600 font-mono text-sm mb-4 block">Section 01</span>
              <h3 className="text-6xl md:text-8xl font-medium">Kinetic<br />Systems</h3>
            </div>
            <div className="flex items-center">
              <p className="text-xl text-zinc-500 leading-relaxed max-w-[30ch]">
                We translate complex data into fluid visual languages that breathe and respond.
              </p>
            </div>
          </div>
        </div>

        <div className="h-full w-screen flex items-center justify-center bg-zinc-900 px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full max-w-[1400px]">
             <div className="order-2 md:order-1 flex items-center">
              <p className="text-xl text-zinc-500 leading-relaxed max-w-[30ch]">
                Architecture that scales. Motion that inspires. Design that dominates.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-zinc-600 font-mono text-sm mb-4 block">Section 02</span>
              <h3 className="text-6xl md:text-8xl font-medium text-right">Adaptive<br />Logic</h3>
            </div>
          </div>
        </div>

        <div className="h-full w-screen flex items-center justify-center px-20">
          <div className="flex flex-col items-center text-center">
             <span className="text-accent font-mono text-sm mb-8 block tracking-[0.5em] uppercase">Ready for launch</span>
             <h3 className="text-7xl md:text-9xl font-medium italic mb-12">Next Gen.</h3>
             <div className="w-1 h-32 bg-gradient-to-b from-accent to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
