import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="glass-card rounded-xl p-xl flex flex-col gap-xl relative overflow-hidden scroll-mt-md">
      <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-container-low opacity-50 z-0"></div>
      
      {/* Hero Core */}
      <div className="flex flex-col md:flex-row gap-xl items-center relative z-10 w-full">
        <div className="md:w-2/3 space-y-md">
          <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">
            Tarang – India's First Unified Seabed Mapping Intelligent Platform
          </h1>
          <p className="font-title-lg text-title-lg text-primary font-semibold">
            TARANG — Technology for Aquatic Recognition, Assessment, Navigation and Geotagging
          </p>
          <h2 className="font-headline-sm text-headline-sm text-on-surface-variant font-medium">
            AI-powered automated underwater anomaly detection system that converts Side-Scan Sonar data into actionable debris maps and cleanup plans.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant border-l-4 border-primary pl-md">
            Tarang is an end-to-end AI platform for marine debris detection, built for India's Exclusive Economic Zone. It ingests live and uploaded SSS logs, denoises and corrects sonar imagery, detects anthropogenic anomalies, fuses duplicate detections, and generates geo-tagged risk layers for MoES, NIOT and maritime agencies. Tarang turns scattered sonar surveys into a national seabed debris intelligence layer for data-driven ocean governance.
          </p>
        </div>
        
        <div className="md:w-1/3 flex justify-center w-full">
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
      </div>
      
      {/* Separator Divider */}
      <hr className="border-t border-outline-variant/30 w-full relative z-10" />

      {/* Showcase Grid of the two Dashboard images */}
      <div className="w-full relative z-10 space-y-md">
        <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-sm">
          <span className="material-symbols-outlined text-primary">visibility</span>
          Operational Intelligence Feed & Survey Mapping
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {/* Sonar Feed Showcase Card */}
          <div className="rounded-xl border border-outline-variant overflow-hidden h-72 relative bg-surface-container shadow-[0_2px_4px_rgba(0,0,0,0.04)] flex flex-col justify-end group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtSDVoNtGIxUF2PxKNRMxreUZl1NNk6c6e9xLAQ-rZJx1oNOIYLi5Xhhy7xIn0LWClxz-1qnxgl66AcRe_ttYexWUSi3T9XsJnVb2GCTWPOTnf0vmkPzk2_QBA6RSzWc7GKjQ7PcmkgvjtHKF_iDyPazhbxXL-vKhJ41dM-EvSXckSQ8fqUVn_V28g469RCuwoR-xHW_dfcQKWbybv5Dm_BGQE4SlILYE932_tAj8Gi-hFsAeC81AG" 
              alt="Side-Scan Sonar Ingestion Feed" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.01]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent z-0"></div>
            <div className="relative z-10 p-md flex flex-col justify-end h-full">
              <div className="bg-background/95 backdrop-blur border border-outline-variant p-sm rounded-lg space-y-xs w-full">
                <span className="font-title-lg text-title-lg text-on-surface flex items-center gap-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-error animate-pulse"></span>
                  Side-Scan Sonar Ingestion Feed
                </span>
                <span className="text-body-md text-on-surface-variant block">
                  Real-time edge signal acquisition, acoustic denoising, and bounding box debris tagging.
                </span>
              </div>
            </div>
          </div>
          
          {/* Survey Trajectory Showcase Card */}
          <div className="rounded-xl border border-outline-variant overflow-hidden h-72 relative bg-surface-container shadow-[0_2px_4px_rgba(0,0,0,0.04)] flex flex-col justify-end group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3yIuijKiY8ZoRpcBOWSkTiImtpojKlCWitQtCTNbraMA2mV8qBW_j_XAVvY0pldpKOpHUR7XJp_SpTYrgkX_jzXMOYRO3y4xIQSiGOL7nxXntvBsoYLzVIzRP-5mhy9L3XKNvbZOG3NBMVNUcClPyZ7uJ-2fn-Rh19Y15LytqITGC9rvxOEpHZYuvhZGaTWzqiK2IT0z2xEPtnwONuaTgalcbkURXGcZGvvMiKv9UGUlSCt8EBLMe" 
              alt="2D Relative Scan Map & Survey Grid" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.01]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent z-0"></div>
            <div className="relative z-10 p-md flex flex-col justify-end h-full">
              <div className="bg-background/95 backdrop-blur border border-outline-variant p-sm rounded-lg space-y-xs w-full">
                <span className="font-title-lg text-title-lg text-on-surface flex items-center gap-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">explore</span>
                  2D Survey Grid Trajectory
                </span>
                <span className="text-body-md text-on-surface-variant block">
                  Geo-referenced target coordinate tracks, ping rates, depth profiles, and spatial metadata logging.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
