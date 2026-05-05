import React from 'react';
import { GithubLogo, TwitterLogo, InstagramLogo, ArrowRight } from '@phosphor-icons/react';

export const Footer = () => {
  return (
    <footer className="pt-32 pb-12 px-6 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
        <div className="md:col-span-6">
          <h2 className="text-4xl md:text-6xl font-medium mb-12 max-w-[12ch]">Let's build the future together.</h2>
          <btn className="group flex items-center gap-3 text-2xl font-medium text-zinc-100 hover:text-accent cursor-pointer transition-colors">
            Start a project
            <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
          </btn>
        </div>
        
        <div className="md:col-span-3">
          <h4 className="text-zinc-600 font-mono text-sm uppercase mb-6 tracking-widest">Connect</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-zinc-100 transition-colors flex items-center gap-2"><GithubLogo /> Github</a></li>
            <li><a href="#" className="hover:text-zinc-100 transition-colors flex items-center gap-2"><TwitterLogo /> Twitter</a></li>
            <li><a href="#" className="hover:text-zinc-100 transition-colors flex items-center gap-2"><InstagramLogo /> Instagram</a></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-zinc-600 font-mono text-sm uppercase mb-6 tracking-widest">Studio</h4>
          <p className="text-zinc-500 mb-6">
            124 Premium Avenue<br />
            Digital District, NY 10001
          </p>
          <a href="mailto:hello@nexus.studio" className="text-zinc-100 font-medium hover:text-accent transition-colors underline underline-offset-4">hello@nexus.studio</a>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-zinc-600 text-sm">© 2026 Nexus Studio. All rights reserved.</span>
        <div className="flex gap-8 text-sm text-zinc-600">
          <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
          <a href="#" className="hover:text-zinc-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
