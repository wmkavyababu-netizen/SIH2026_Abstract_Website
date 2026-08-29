import React from 'react';

const OurSolution = () => {
  return (
    <section id="our-solution" className="space-y-md scroll-mt-md">
      <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
        <span className="material-symbols-outlined text-primary">architecture</span>
        Our Solution – Tarang
      </h2>
      
      <div className="glass-card rounded-xl p-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <p className="font-body-lg text-on-surface-variant mb-lg relative z-10 max-w-3xl">
          Tarang is India's first unified platform for AI-driven marine debris detection and cleanup planning. It connects raw Side-Scan Sonar logs to operational GIS outputs, providing standardized debris classes, confidence scores and prioritized recovery plans for agencies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md relative z-10">
          {/* Card 1 */}
          <div className="bg-surface p-md rounded border border-outline-variant flex flex-col items-center text-center hover:shadow-sm transition-shadow duration-200">
            <span className="material-symbols-outlined text-display-lg text-primary mb-sm">sensors</span>
            <h4 className="font-title-lg text-on-surface mb-xs">Sonar Ingestion</h4>
            <p className="text-body-md text-on-surface-variant">Ingests live and uploaded SSS logs from multiple sonar formats.</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-surface p-md rounded border border-outline-variant flex flex-col items-center text-center hover:shadow-sm transition-shadow duration-200">
            <span className="material-symbols-outlined text-display-lg text-primary mb-sm">tune</span>
            <h4 className="font-title-lg text-on-surface mb-xs">Intelligent Pipeline</h4>
            <p className="text-body-md text-on-surface-variant">Applies an intelligent sonar pipeline for denoising, shadow handling, resolution enhancement and motion correction.</p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-surface p-md rounded border border-outline-variant flex flex-col items-center text-center hover:shadow-sm transition-shadow duration-200">
            <span className="material-symbols-outlined text-display-lg text-primary mb-sm">psychology</span>
            <h4 className="font-title-lg text-on-surface mb-xs">AI Anomaly Detection</h4>
            <p className="text-body-md text-on-surface-variant">Runs an AI-powered anomaly detection model to separate natural seabed features from artificial debris.</p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-surface p-md rounded border border-outline-variant flex flex-col items-center text-center hover:shadow-sm transition-shadow duration-200">
            <span className="material-symbols-outlined text-display-lg text-primary mb-sm">layers</span>
            <h4 className="font-title-lg text-on-surface mb-xs">Duplicate Fusion</h4>
            <p className="text-body-md text-on-surface-variant">Fuses repeated detections across pings and survey lines using spatial-temporal evidence, avoiding duplicate counts.</p>
          </div>
          
          {/* Card 5 */}
          <div className="bg-surface p-md rounded border border-outline-variant flex flex-col items-center text-center hover:shadow-sm transition-shadow duration-200">
            <span className="material-symbols-outlined text-display-lg text-primary mb-sm">map</span>
            <h4 className="font-title-lg text-on-surface mb-xs">GIS & Mission Planning</h4>
            <p className="text-body-md text-on-surface-variant">Generates geo-tagged debris layers, risk scores and cleanup mission plans with estimated recovery loads.</p>
          </div>
          
          {/* Card 6 */}
          <div className="bg-surface p-md rounded border border-outline-variant flex flex-col items-center text-center hover:shadow-sm transition-shadow duration-200">
            <span className="material-symbols-outlined text-display-lg text-primary mb-sm">description</span>
            <h4 className="font-title-lg text-on-surface mb-xs">Standardized Export</h4>
            <p className="text-body-md text-on-surface-variant">Exports standardized JSON, CSV and GeoJSON reports for integration with MoES/NIOT systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolution;
