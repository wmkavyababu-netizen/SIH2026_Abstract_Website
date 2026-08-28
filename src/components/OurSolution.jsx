import React from 'react';

const OurSolution = () => {
  return (
    <section className="space-y-md">
      <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
        <span className="material-symbols-outlined text-primary">architecture</span>
        Our Solution
      </h2>
      
      <div className="glass-card rounded-xl p-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <p className="font-body-lg text-on-surface-variant mb-lg relative z-10 max-w-3xl">
          TARANG provides a fully automated, edge-native pipeline. We eliminate the need for manual review by deploying highly optimized deep learning models directly onto the autonomous underwater vehicles.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-md relative z-10">
          <div className="bg-surface p-md rounded border border-outline-variant text-center">
            <span className="material-symbols-outlined text-display-lg text-primary mb-sm">sensors</span>
            <h4 className="font-title-lg text-on-surface mb-xs">1. SSS Ingestion</h4>
            <p className="text-code-sm text-on-surface-variant">Raw acoustic data acquisition.</p>
          </div>
          
          <div className="bg-surface p-md rounded border border-outline-variant text-center relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant -z-10 -translate-y-1/2 -translate-x-1/2"></div>
            <span className="material-symbols-outlined text-display-lg text-primary mb-sm bg-surface">blur_on</span>
            <h4 className="font-title-lg text-on-surface mb-xs">2. Preprocessing</h4>
            <p className="text-code-sm text-on-surface-variant">Denoising & enhancement.</p>
          </div>
          
          <div className="bg-surface p-md rounded border border-outline-variant text-center relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant -z-10 -translate-y-1/2 -translate-x-1/2"></div>
            <span className="material-symbols-outlined text-display-lg text-primary mb-sm bg-surface">model_training</span>
            <h4 className="font-title-lg text-on-surface mb-xs">3. Edge AI</h4>
            <p className="text-code-sm text-on-surface-variant">YOLOv8 & U-Net Analysis.</p>
          </div>
          
          <div className="bg-surface p-md rounded border border-outline-variant text-center relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant -z-10 -translate-y-1/2 -translate-x-1/2"></div>
            <span className="material-symbols-outlined text-display-lg text-primary mb-sm bg-surface">map</span>
            <h4 className="font-title-lg text-on-surface mb-xs">4. Geotagging</h4>
            <p className="text-code-sm text-on-surface-variant">Coordinate mapping.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolution;
