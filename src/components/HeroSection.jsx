import React from 'react';

const HeroSection = () => {
  return (
    <section className="glass-card rounded-xl p-xl flex flex-col md:flex-row gap-xl items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-container-low opacity-50 z-0"></div>
      
      <div className="relative z-10 md:w-2/3 space-y-md">
        <h1 className="font-display-lg text-display-lg text-on-surface">
          TARANG: Technology for Acoustic Recognition, Assessment, Navigation & Geotagging
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant border-l-4 border-primary pl-md">
          Addressing the SIH 2026 Problem Statement for the Ministry of Earth Sciences: Automated detection and classification of submerged marine debris using Edge AI and Side-Scan Sonar.
        </p>
        
        <div className="flex gap-md pt-sm">
          <button className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors">
            Initialize Diagnostics
          </button>
          <button className="border border-outline-variant text-on-surface px-lg py-sm rounded-lg font-label-md text-label-md hover:bg-surface-container-high transition-colors">
            View Technical Report
          </button>
        </div>
      </div>
      
      <div className="relative z-10 md:w-1/3 flex justify-center w-full">
        <div className="w-full h-64 rounded-xl border border-outline-variant bg-surface-container overflow-hidden relative">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA37gT0GKXhlqma-mWTnkSv_9xX34Zdb8Wbq0SULjao7C1Yu1ZsWUXt3mQqbmiAqy_DyI8n_-YPeFEVvEBZ4iNNuiMMPa0G5rAB0Q6wRAJ_6du0aFGG4NFyoyDxlnF2fMVtQ0xoZGXChDzNKU0srvqMO78I47t63i6Vsk1MumpI_a4Gjb9hL-HeITd_CiOBgr-f1aQ4mSCJe9NNi59-ySXXiXoLBkNEC1YCoIYSZ8M27RGp5AkoCVRc" 
            alt="AUV Concept" 
            className="w-full h-full object-cover opacity-80" 
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-display-lg text-primary bg-white/80 rounded-full p-md shadow-sm">
              precision_manufacturing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
