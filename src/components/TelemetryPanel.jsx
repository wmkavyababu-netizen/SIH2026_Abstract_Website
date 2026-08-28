import React from 'react';

const TelemetryPanel = () => {
  return (
    <section className="space-y-md">
      <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
        <span className="material-symbols-outlined text-primary">dashboard</span>
        Mission Control Panel
      </h2>
      
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
    </section>
  );
};

export default TelemetryPanel;
