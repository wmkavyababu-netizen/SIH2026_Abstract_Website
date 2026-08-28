import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import TelemetryPanel from './components/TelemetryPanel';
import WhyThisPS from './components/WhyThisPS';
import OurSolution from './components/OurSolution';
import ExistingVsOur from './components/ExistingVsOur';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderContent = () => {
    switch (currentView) {
      case 'analytics':
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-md">
            <span className="material-symbols-outlined text-display-lg text-primary text-6xl">analytics</span>
            <h2 className="font-display-lg text-on-surface">Analytics</h2>
            <p className="text-on-surface-variant font-body-lg">Advanced reporting and data visualization coming soon.</p>
          </div>
        );
      case 'missions':
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-md">
            <span className="material-symbols-outlined text-display-lg text-primary text-6xl">explore</span>
            <h2 className="font-display-lg text-on-surface">Missions</h2>
            <p className="text-on-surface-variant font-body-lg">Mission planning and fleet management coming soon.</p>
          </div>
        );
      case 'resources':
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-md">
            <span className="material-symbols-outlined text-display-lg text-primary text-6xl">description</span>
            <h2 className="font-display-lg text-on-surface">Resources</h2>
            <p className="text-on-surface-variant font-body-lg">Documentation and API references coming soon.</p>
          </div>
        );
      case 'dashboard':
      default:
        return (
          <>
            <HeroSection />
            <TelemetryPanel />
            <WhyThisPS />
            <OurSolution />
            <ExistingVsOur />
          </>
        );
    }
  };

  return (
    <div className="flex h-screen bg-background font-body-md text-on-surface overflow-hidden">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      
      <div className="flex-1 overflow-y-auto">
        <main className="max-w-container-max mx-auto px-lg py-xl space-y-xl">
          {renderContent()}
        </main>
        
        <footer className="bg-surface-container-low text-secondary full-width border-t border-outline-variant w-full py-xl px-lg mt-xl flex flex-col md:flex-row justify-between items-center gap-md max-w-container-max mx-auto font-body-md text-body-md">
          <div className="flex flex-col gap-sm items-center md:items-start">
            <span className="font-title-lg text-title-lg font-bold text-on-surface">TARANG</span>
            <span>© 2026 Ministry of Earth Sciences. All rights reserved. Built for NIOT & SIH 2026.</span>
          </div>
          <div className="flex gap-lg font-label-md text-label-md text-on-secondary-container">
            <a href="#" className="hover:text-primary transition-all duration-200">Architecture</a>
            <a href="#" className="hover:text-primary transition-all duration-200">Technical Reports</a>
            <a href="#" className="hover:text-primary transition-all duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-all duration-200">System Status</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
