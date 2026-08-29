import React from 'react';

const ExistingVsOur = () => {
  const competitors = [
    {
      title: "1. QGIS + Sonar Plugins (e.g., QPS, Sonar-QGIS)",
      do: "Visualize and manually interpret side-scan sonar mosaics; some basic classification plugins exist.",
      gaps: "Mostly manual interpretation; no automated debris detection. No standardized debris classes or confidence scores. No built-in duplicate fusion or national-scale debris atlas."
    },
    {
      title: "2. CARIS HIPS & SIPS",
      do: "Professional hydrographic software for processing multibeam and side-scan sonar, creating bathymetry and mosaics.",
      gaps: "Focused on hydrography and charting, not marine debris. Debris detection is manual or ad-hoc, not AI-driven. No dedicated risk engine or cleanup mission planning module."
    },
    {
      title: "3. Open-source Underwater Perception",
      do: "Research-level models for object detection in underwater optical or sonar images.",
      gaps: "Often tested on small, single-site datasets. Not integrated with survey metadata, GIS and reporting for agencies. No operational duplicate-aware fusion or national deployment framework."
    },
    {
      title: "4. Marine Litter Monitoring Tools",
      do: "Map and quantify surface or shoreline marine litter using drones, cameras or citizen science.",
      gaps: "Focus on coastal and surface litter, not subsea debris. Do not ingest or analyze side-scan sonar data. Cannot support underwater cleanup mission planning."
    }
  ];

  return (
    <section id="existing-products-vs-tarang" className="space-y-md scroll-mt-md">
      <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
        <span className="material-symbols-outlined text-primary">compare_arrows</span>
        Existing Products vs Tarang
      </h2>
      
      <p className="font-body-lg text-on-surface-variant max-w-3xl">
        Several tools exist for sonar processing, underwater perception or marine litter studies, but none provide an end-to-end, India-focused seabed debris intelligence platform like Tarang.
      </p>

      {/* Grid of Competitors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        {competitors.map((item, index) => (
          <div key={index} className="glass-card rounded-xl p-md border border-outline-variant flex flex-col justify-between">
            <div>
              <h4 className="font-title-lg text-on-surface mb-sm flex items-center gap-xs">
                <span className="material-symbols-outlined text-error text-[18px]">cancel</span>
                {item.title}
              </h4>
              <div className="space-y-sm text-body-md text-on-surface-variant">
                <p><strong>What they do:</strong> {item.do}</p>
                <p className="text-error/90 bg-error-container/10 p-sm rounded border-l-2 border-error">
                  <strong>Gaps:</strong> {item.gaps}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tarang Highlight Card */}
      <div className="bg-primary-container/10 border-2 border-primary rounded-xl p-lg relative overflow-hidden mt-lg">
        <div className="absolute top-0 right-0 bg-primary text-on-primary font-label-md text-label-md px-md py-xs rounded-bl">
          OUR SOLUTION
        </div>
        
        <h3 className="font-title-lg text-display-lg text-primary flex items-center gap-xs mb-md">
          <span className="material-symbols-outlined text-primary text-[28px]">check_circle</span>
          Tarang (Our Product)
        </h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-md text-body-md text-on-surface-variant">
          <li className="flex gap-xs items-start">
            <span className="material-symbols-outlined text-primary text-md">check</span>
            <span><strong>India's first unified seabed debris platform</strong> focused on subsea anthropogenic anomalies.</span>
          </li>
          <li className="flex gap-xs items-start">
            <span className="material-symbols-outlined text-primary text-md">check</span>
            <span><strong>End-to-end pipeline:</strong> Ingestion → AI detection → duplicate fusion → geo-tagging → risk assessment → cleanup planning.</span>
          </li>
          <li className="flex gap-xs items-start">
            <span className="material-symbols-outlined text-primary text-md">check</span>
            <span><strong>Standardized outputs:</strong> Debris classes, confidence scores, and GIS layers ready for MoES/NIOT workflows.</span>
          </li>
          <li className="flex gap-xs items-start">
            <span className="material-symbols-outlined text-primary text-md">check</span>
            <span><strong>Operational Ready:</strong> Specifically designed for Indian EEZ conditions, multi-vendor sonar formats, and agency workflows.</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExistingVsOur;
