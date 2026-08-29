import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import TelemetryPanel from './components/TelemetryPanel';
import WhyThisPS from './components/WhyThisPS';
import OurSolution from './components/OurSolution';
import ExistingVsOur from './components/ExistingVsOur';
import WhatTarangDetects from './components/WhatTarangDetects';
import Affiliations from './components/Affiliations';
import References from './components/References';

function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const sectionIds = [
      'home',
      'why-this-problem-statement',
      'our-solution',
      'existing-products-vs-tarang',
      'what-tarang-detects',
      'dashboard',
      'affiliations',
      'references'
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentView(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="flex h-screen bg-background font-body-md text-on-surface overflow-hidden">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      
      <div className="flex-1 overflow-y-auto">
        <main className="max-w-container-max mx-auto px-lg py-xl space-y-xl">
          <HeroSection />
          <hr className="border-t border-outline-variant/30 w-full" />
          <WhyThisPS />
          <OurSolution />
          <ExistingVsOur />
          <WhatTarangDetects />
          <TelemetryPanel />
          <Affiliations />
          <References />
        </main>
        
        <footer className="bg-surface-container-low text-secondary full-width border-t border-outline-variant w-full py-xl px-lg mt-xl flex flex-col md:flex-row justify-between items-center gap-md max-w-container-max mx-auto font-body-md text-body-md">
          <div className="flex flex-col gap-sm items-center md:items-start">
            <span className="font-title-lg text-title-lg font-bold text-on-surface">TARANG</span>
            <span>© 2026 Ministry of Earth Sciences. All rights reserved. Built for NIOT & SIH 2026.</span>
          </div>
          <div className="flex gap-lg font-label-md text-label-md text-on-secondary-container">
            <a href="#our-solution" className="hover:text-primary transition-all duration-200">Architecture</a>
            <a href="#references" className="hover:text-primary transition-all duration-200">Technical Reports</a>
            <a href="#affiliations" className="hover:text-primary transition-all duration-200">Affiliations</a>
            <a href="#references" className="hover:text-primary transition-all duration-200">System Status</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
