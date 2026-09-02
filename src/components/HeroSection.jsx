import React from 'react';

const HeroSection = () => {
  const capabilities = [
    {
      num: "01",
      title: "Intelligent Sonar Pipeline",
      desc: "Processes live and uploaded Side-Scan Sonar data, handling sonar noise, resolution variations, and motion-related data issues before AI analysis.",
      flow: "SONAR DATA → PROCESSING → CLEAN DATA → AI",
      isLeft: true
    },
    {
      num: "02",
      title: "Marine Target Intelligence",
      desc: "Separates natural seabed topology from artificial anomalies and identifies targets using class, confidence, dimensions, and location.",
      flow: "RAW SONAR → AI DETECTION → SEGMENTATION → TARGET INTELLIGENCE",
      isLeft: false
    },
    {
      num: "03",
      title: "Verified Object Intelligence",
      desc: "Uses spatial-temporal evidence to combine repeated detections across pings and survey lines into unique geo-tagged objects, reducing duplicate counts.",
      flow: "MULTIPLE DETECTIONS → FUSION → ONE VERIFIED OBJECT",
      isLeft: true
    },
    {
      num: "04",
      title: "GIS Reporting Portal",
      desc: "Visualizes survey coverage, detected targets, and risk layers and generates standardized JSON, CSV, and GeoJSON outputs.",
      flow: "SONAR → GIS → RISK → REPORT",
      isLeft: false
    }
  ];

  return (
    <section id="home" className="glass-card rounded-xl p-lg md:p-xl flex flex-col gap-lg md:gap-xl relative overflow-hidden scroll-mt-md bg-white select-none">
      <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-container-low opacity-50 z-0"></div>
      
      {/* Intro Block */}
      <div className="flex flex-col md:flex-row gap-lg md:gap-xl items-center relative z-10 w-full">
        <div className="md:w-2/3 space-y-md">
          <h1 className="section-heading text-[#006194]">
            Tarang – India's First Unified Seabed Mapping Intelligent Platform
          </h1>
          <p className="font-bold text-[#006194] text-[18px] tracking-wide uppercase">
            TARANG — Technology for Aquatic Regeneration, Assessment, Navigation & Geotagging
          </p>
          <p className="body-text text-slate-600 font-semibold italic">
            AI-powered automated underwater anomaly detection system that converts Side-Scan Sonar data into actionable debris maps and cleanup plans.
          </p>
          <p className="body-text">
            Tarang is an end-to-end AI platform for marine debris detection, built for India's Exclusive Economic Zone (EEZ). It ingests <strong>live and uploaded SSS logs</strong>, denoises and corrects sonar imagery, detects <strong>anthropogenic anomalies</strong>, fuses duplicate detections, and generates <strong>geo-tagged risk layers</strong> for MoES, NIOT and maritime agencies. Tarang turns scattered sonar surveys into a national seabed debris intelligence layer for data-driven ocean governance.
          </p>
        </div>
        
        {/* AUV Concept Image */}
        <div className="md:w-1/3 flex justify-center w-full">
          <div className="w-full h-64 rounded-xl border border-outline-variant bg-surface-container overflow-hidden relative shadow-sm">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA37gT0GKXhlqma-mWTnkSv_9xX34Zdb8Wbq0SULjao7C1Yu1ZsWUXt3mQqbmiAqy_DyI8n_-YPeFEVvEBZ4iNNuiMMPa0G5rAB0Q6wRAJ_6du0aFGG4NFyoyDxlnF2fMVtQ0xoZGXChDzNKU0srvqMO78I47t63i6Vsk1MumpI_a4Gjb9hL-HeITd_CiOBgr-f1aQ4mSCJe9NNi59-ySXXiXoLBkNEC1YCoIYSZ8M27RGp5AkoCVRc" 
              alt="AUV Concept" 
              className="w-full h-full object-cover opacity-95" 
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <span className="material-symbols-outlined text-display-lg text-white bg-[#006194]/85 rounded-full p-md shadow-md">
                precision_manufacturing
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <hr className="border-t border-outline-variant/30 w-full relative z-10" />

      {/* Capabilities Roadmap Layout */}
      <div className="relative z-10 space-y-md md:space-y-lg">
        <h3 className="section-heading text-[#006194]">
          CORE CAPABILITIES ROADMAP
        </h3>

        {/* Visual Timeline: single column on mobile, alternating grid on desktop */}
        <div className="relative py-md">
          {/* Desktop center timeline */}
          <div
            className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-0.5 -translate-x-1/2 bg-sky-200 md:block"
            aria-hidden="true"
          />

          {/* Mobile left timeline */}
          <div
            className="pointer-events-none absolute left-3 top-0 bottom-0 w-0.5 bg-sky-200 md:hidden"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-lg md:gap-xl">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="relative w-[92%] mx-auto md:w-full md:mx-0 md:grid md:grid-cols-2 md:gap-x-12"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-3 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-[#006194] md:left-1/2"
                  aria-hidden="true"
                />

                {/* Stage card — full block: number, heading, description */}
                <div
                  className={`min-w-0 w-full pl-8 md:pl-0 ${
                    cap.isLeft
                      ? 'md:col-start-1 md:flex md:justify-end md:pr-6'
                      : 'md:col-start-2 md:justify-self-start md:pl-6'
                  }`}
                >
                  <div
                    className={`roadmap-card glass-card w-full rounded-xl border border-outline-variant/60 bg-white p-md shadow-sm transition-colors hover:border-[#006194]/40 space-y-sm md:max-w-[480px] ${
                      cap.isLeft ? 'md:text-right' : 'text-left'
                    }`}
                  >
                    <span className="label-text text-glow-primary text-[#006194] block">
                      {cap.num} — STAGE
                    </span>
                    <h4 className="sub-heading">{cap.title}</h4>
                    <p className="body-text">{cap.desc}</p>
                    <div className="bg-sky-50 border border-sky-100 rounded px-sm py-sm text-[10px] md:text-[11px] text-[#006194] font-bold text-center w-full">
                      {cap.flow}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
