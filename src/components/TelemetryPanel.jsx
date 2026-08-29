import React from 'react';

const TelemetryPanel = () => {
  return (
    <section id="dashboard" className="space-y-md scroll-mt-md">
      <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
        <span className="material-symbols-outlined text-primary">dashboard</span>
        Tarang Dashboard – What You Will See
      </h2>
      
      <p className="font-body-lg text-on-surface-variant max-w-3xl">
        The Tarang dashboard is the operational interface for survey operators, scientists and authorities to explore, validate and act on seabed debris data.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
        {/* Left Diagnostic Card */}
        <div className="bg-white rounded-xl border border-outline-variant p-0 overflow-hidden flex flex-col shadow-[0_2px_4px_rgba(0,0,0,0.04)]">
          <div className="border-b border-outline-variant p-md flex justify-between items-center bg-surface-container-lowest">
            <h3 className="font-title-lg text-title-lg text-on-surface">Side-Scan Sonar Ingestion Feed</h3>
            <span className="bg-error-container text-on-error-container font-code-sm text-code-sm px-sm py-xs rounded flex items-center gap-xs">
              <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span> 
              Live Stream
            </span>
          </div>
          
          <div className="p-md bg-surface-container-low flex-grow relative h-80">
            <div 
              className="bg-cover bg-center w-full h-full rounded border border-outline-variant relative" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtSDVoNtGIxUF2PxKNRMxreUZl1NNk6c6e9xLAQ-rZJx1oNOIYLi5Xhhy7xIn0LWClxz-1qnxgl66AcRe_ttYexWUSi3T9XsJnVb2GCTWPOTnf0vmkPzk2_QBA6RSzWc7GKjQ7PcmkgvjtHKF_iDyPazhbxXL-vKhJ41dM-EvSXckSQ8fqUVn_V28g469RCuwoR-xHW_dfcQKWbybv5Dm_BGQE4SlILYE932_tAj8Gi-hFsAeC81AG')" }}
            >
              {/* Bounding Boxes UI Mock */}
              <div className="absolute top-[20%] left-[30%] w-24 h-16 border-2 border-primary bg-primary/10 flex flex-col justify-end">
                <span className="bg-primary text-on-primary font-code-sm text-code-sm px-xs w-fit whitespace-nowrap">Plastic Debris #07</span>
              </div>
              <div className="absolute top-[60%] right-[20%] w-16 h-16 border-2 border-[#ac6200] bg-[#ac6200]/10 flex flex-col justify-end">
                <span className="bg-[#ac6200] text-[#ffffff] font-code-sm text-code-sm px-xs w-fit whitespace-nowrap">Anomaly #12</span>
              </div>
            </div>
            
            <div className="absolute bottom-lg left-lg right-lg flex justify-between gap-sm">
              <div className="bg-white/90 backdrop-blur px-sm py-xs rounded border border-outline-variant font-code-sm text-code-sm text-on-surface flex gap-sm">
                <span className="text-on-surface-variant">Depth:</span> 45.2M
              </div>
              <div className="bg-white/90 backdrop-blur px-sm py-xs rounded border border-outline-variant font-code-sm text-code-sm text-on-surface flex gap-sm">
                <span className="text-on-surface-variant">Freq:</span> 900kHz
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Diagnostic Card */}
        <div className="bg-white rounded-xl border border-outline-variant p-0 overflow-hidden flex flex-col shadow-[0_2px_4px_rgba(0,0,0,0.04)]">
          <div className="border-b border-outline-variant p-md flex justify-between items-center bg-surface-container-lowest">
            <h3 className="font-title-lg text-title-lg text-on-surface">2D Relative Scan Map & Survey Grid</h3>
            <button className="text-primary hover:bg-surface-container-low p-xs rounded transition-colors">
              <span className="material-symbols-outlined">zoom_in_map</span>
            </button>
          </div>
          
          <div className="p-md bg-surface-container-low flex-grow relative h-80">
            <div 
              className="bg-cover bg-center w-full h-full rounded border border-outline-variant relative" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3yIuijKiY8ZoRpcBOWSkTiImtpojKlCWitQtCTNbraMA2mV8qBW_j_XAVvY0pldpKOpHUR7XJp_SpTYrgkX_jzXMOYRO3y4xIQSiGOL7nxXntvBsoYLzVIzRP-5mhy9L3XKNvbZOG3NBMVNUcClPyZ7uJ-2fn-Rh19Y15LytqITGC9rvxOEpHZYuvhZGaTWzqiK2IT0z2xEPtnwONuaTgalcbkURXGcZGvvMiKv9UGUlSCt8EBLMe')" }}
            >
              {/* Trajectory Mock */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M10,90 L30,70 L50,80 L70,40 L90,20" fill="none" stroke="#006194" strokeDasharray="4,2" strokeWidth="2"></path>
                <circle className="animate-ping" cx="90" cy="20" fill="#006194" r="3"></circle>
                <circle cx="90" cy="20" fill="#ffffff" r="2"></circle>
              </svg>
            </div>
            
            <div className="absolute top-lg right-lg bg-white/90 backdrop-blur p-sm rounded border border-outline-variant font-code-sm text-code-sm text-on-surface flex flex-col gap-xs">
              <div className="flex justify-between gap-md"><span className="text-on-surface-variant">LAT:</span> 12.9716 N</div>
              <div className="flex justify-between gap-md"><span className="text-on-surface-variant">LON:</span> 77.5946 E</div>
              <div className="flex justify-between gap-md"><span className="text-on-surface-variant">HDG:</span> 045°</div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Features List */}
      <div className="mt-xl space-y-md">
        <h3 className="font-headline-sm text-headline-sm text-on-surface">Key Dashboard Modules</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {/* Module 1 */}
          <div className="glass-card rounded-xl p-md border border-outline-variant space-y-sm">
            <h4 className="font-title-lg text-primary flex items-center gap-xs">
              <span className="material-symbols-outlined">map</span>
              Interactive Map View
            </h4>
            <ul className="list-disc pl-md text-body-md text-on-surface-variant space-y-xs">
              <li>Survey tracks and coverage heatmaps.</li>
              <li>Detected debris points with class icons (nets, barrels, tires, wrecks, etc.).</li>
              <li>Risk layers (high/medium/low) and priority corridors.</li>
            </ul>
          </div>
          
          {/* Module 2 */}
          <div className="glass-card rounded-xl p-md border border-outline-variant space-y-sm">
            <h4 className="font-title-lg text-primary flex items-center gap-xs">
              <span className="material-symbols-outlined">info</span>
              Debris Details Panel
            </h4>
            <ul className="list-disc pl-md text-body-md text-on-surface-variant space-y-xs">
              <li>For each object: class, dimensions, confidence, depth, location, survey ID.</li>
              <li>Original sonar frame thumbnail with detection overlay.</li>
              <li>Option to mark as "Verified", "False Positive" or "Needs Review".</li>
            </ul>
          </div>
          
          {/* Module 3 */}
          <div className="glass-card rounded-xl p-md border border-outline-variant space-y-sm">
            <h4 className="font-title-lg text-primary flex items-center gap-xs">
              <span className="material-symbols-outlined">filter_alt</span>
              Filters & Search
            </h4>
            <ul className="list-disc pl-md text-body-md text-on-surface-variant space-y-xs">
              <li>Filter by class, confidence, depth, date, survey line, risk level.</li>
              <li>Search by location, object ID or survey name.</li>
            </ul>
          </div>
          
          {/* Module 4 */}
          <div className="glass-card rounded-xl p-md border border-outline-variant space-y-sm">
            <h4 className="font-title-lg text-primary flex items-center gap-xs">
              <span className="material-symbols-outlined">route</span>
              Cleanup Mission Planner
            </h4>
            <ul className="list-disc pl-md text-body-md text-on-surface-variant space-y-xs">
              <li>Clustered debris hotspots with estimated recovery load.</li>
              <li>Suggested routes considering depth, distance and vessel constraints.</li>
              <li>Exportable mission plan (CSV/GeoJSON).</li>
            </ul>
          </div>
          
          {/* Module 5 */}
          <div className="glass-card rounded-xl p-md border border-outline-variant space-y-sm">
            <h4 className="font-title-lg text-primary flex items-center gap-xs">
              <span className="material-symbols-outlined">download</span>
              Reports & Exports
            </h4>
            <ul className="list-disc pl-md text-body-md text-on-surface-variant space-y-xs">
              <li>Download survey-wise debris summaries as JSON, CSV, GeoJSON.</li>
              <li>Generate PDF snapshots of map views and risk summaries.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelemetryPanel;
