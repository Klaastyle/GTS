import React from 'react';
import { Command } from '@phosphor-icons/react';

export const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-4xl px-4">
      <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-background">
            <Command size={20} weight="fill" />
          </div>
          <span className="text-zinc-100 font-medium tracking-tight text-lg">Nexus</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {['Experience', 'Manifesto', 'Studio', 'Connect'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-zinc-100 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="bg-zinc-100 text-background px-5 py-2 rounded-full text-sm font-semibold hover:bg-white transition-all active:scale-95">
          Get Started
        </button>
      </div>
    </nav>
  );
};
