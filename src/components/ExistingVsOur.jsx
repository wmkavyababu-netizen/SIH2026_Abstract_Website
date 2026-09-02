import React from 'react';

const ExistingVsOur = () => {
  const comparisons = [
    {
      name: "GHOSTNETZERO.AI",
      limit: "Primarily focused on ghost nets; cloud-oriented processing and not designed as a broad multi-class national seabed debris intelligence platform.",
      diff: "Multi-class detection including ghost nets, ghost gear, shipwrecks, containers and anomalous/artificial objects, with edge-ready architecture and a unified intelligence layer."
    },
    {
      name: "SONARWIZ ATR",
      limit: "Commercial hydrography/target-analysis software with generic target detections rather than a dedicated marine-debris taxonomy and cleanup planning workflow.",
      diff: "Marine debris taxonomy, AI-based classification, duplicate-aware fusion, risk scoring, GIS outputs and cleanup mission planning."
    },
    {
      name: "OCEAN AID ATR",
      limit: "Strong focus on ghost fishing gear and real-time mapping but not a complete multi-class subsea debris intelligence and operational reporting platform.",
      diff: "Comprehensive subsea debris detection with geo-tagged reports and agency-ready JSON/CSV/GeoJSON outputs."
    },
    {
      name: "AI4SHIPWRECKS",
      limit: "Specialized primarily around shipwreck segmentation and not a mixed-debris end-to-end operational cleanup platform.",
      diff: "Unified mixed-debris detection, operational dashboard, risk layers and mission planning."
    }
  ];

  return (
    <section id="existing-products-vs-tarang" className="space-y-xl scroll-mt-md bg-white p-lg rounded-xl border border-outline-variant/40 shadow-sm">
      {/* Title */}
      <h2 className="section-heading text-[#006194]">
        EXISTING PRODUCTS VS TARANG
      </h2>

      <p className="body-text text-slate-500 mb-lg">
        Compare the processing limits of existing systems and check how Tarang resolves them.
      </p>

      {/* Grid Layout: 2 Columns on Desktop, 1 Column on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mt-md">
        {comparisons.map((item, index) => (
          <div 
            key={index} 
            className="glass-card rounded-xl p-lg border border-outline-variant/60 bg-white shadow-sm flex flex-col justify-between hover:border-[#006194]/30 transition-colors"
          >
            {/* Competitor Header */}
            <div className="border-b border-outline-variant/40 pb-sm mb-md">
              <h4 className="sub-heading text-[#ba1a1a] flex items-center gap-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[18px]">cancel</span>
                {item.name}
              </h4>
            </div>

            {/* Content Stack: Limitation followed by Differentiator */}
            <div className="space-y-md flex-grow">
              <div className="space-y-xs">
                <span className="label-text text-[10px] text-[#ba1a1a] font-bold tracking-wider block">LIMITATION</span>
                <p className="body-text text-slate-600 pl-sm border-l-2 border-red-200">
                  {item.limit}
                </p>
              </div>

              <div className="space-y-xs bg-sky-50/50 p-md rounded-xl border border-sky-100/50">
                <span className="label-text text-[10px] text-[#006194] font-bold tracking-wider block">TARANG DIFFERENTIATOR</span>
                <p className="body-text text-[#004b73] font-semibold pl-sm border-l-2 border-primary">
                  {item.diff}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Target Innovation Keywords HUD banner */}
      <div className="bg-sky-50 border border-[#006194]/20 rounded-xl p-lg mt-lg shadow-sm">
        <h3 className="sub-heading text-[#006194] mb-sm font-bold">
          TARANG CORE ADVANTAGE DIRECTIVES
        </h3>
        <div className="flex flex-wrap gap-sm text-[10px] uppercase font-bold text-[#006194]">
          <span className="bg-white border border-[#006194]/15 px-sm py-[2px] rounded">MULTI-CLASS</span>
          <span className="bg-white border border-[#006194]/15 px-sm py-[2px] rounded">PHYSICS-ASSISTED</span>
          <span className="bg-white border border-[#006194]/15 px-sm py-[2px] rounded">DUPLICATE-AWARE</span>
          <span className="bg-white border border-[#006194]/15 px-sm py-[2px] rounded">OPEN-SET</span>
          <span className="bg-white border border-[#006194]/15 px-sm py-[2px] rounded">MISSION-READY</span>
        </div>
      </div>
    </section>
  );
};

export default ExistingVsOur;
