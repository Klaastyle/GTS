import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoFeatures } from './components/BentoFeatures';
import { ScrollShowcase } from './components/ScrollShowcase';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Noise overlay following mouse for a premium touch
    const noise = document.querySelector('.noise-overlay') as HTMLElement;
    
    // Smooth scroll reveal for all elements with .gsap-reveal
    const reveals = document.querySelectorAll('.gsap-reveal');
    reveals.forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-[100dvh] overflow-x-hidden">
      <div className="noise-overlay fixed inset-0 z-50 mix-blend-overlay" />
      
      <Navbar />
      
      <main>
        <Hero />
        <BentoFeatures />
        <ScrollShowcase />
      </main>

      <Footer />
    </div>
  );
}

export default App;
