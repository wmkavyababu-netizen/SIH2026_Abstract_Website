import React, { useState } from 'react';

const WhatTarangDetects = () => {
  const [activeCatalogIndex, setActiveCatalogIndex] = useState(0);

  const catalogItems = [
    {
      emoji: "🕸️",
      name: "Ghost Nets",
      desc: "Synthetic gill nets and trawl nets lost at sea. They snag on rocky reefs and float with currents, presenting long-term entangling threats to fish and marine life.",
      risk: "CRITICAL",
      overlay: {
        boxId: "BOX-NET-07",
        class: "GHOST NET",
        conf: "91.2%",
        dims: "18.5m x 3.2m",
        lat: "12°97'18\" N",
        lon: "77°59'42\" E",
        time: "2026-08-30 12:42 GMT",
        shadow: "Extensive acoustic shadow cast along seabed topology."
      },
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtSDVoNtGIxUF2PxKNRMxreUZl1NNk6c6e9xLAQ-rZJx1oNOIYLi5Xhhy7xIn0LWClxz-1qnxgl66AcRe_ttYexWUSi3T9XsJnVb2GCTWPOTnf0vmkPzk2_QBA6RSzWc7GKjQ7PcmkgvjtHKF_iDyPazhbxXL-vKhJ41dM-EvSXckSQ8fqUVn_V28g469RCuwoR-xHW_dfcQKWbybv5Dm_BGQE4SlILYE932_tAj8Gi-hFsAeC81AG"
    },
    {
      emoji: "⚙️",
      name: "Ghost Gear",
      desc: "Lost or abandoned fishing traps, cages, lead lines, and anchor cables. These items collect on rocky reefs and restrict benthic access.",
      risk: "HIGH",
      overlay: {
        boxId: "BOX-GER-19",
        class: "GHOST GEAR",
        conf: "87.5%",
        dims: "3.2m x 2.1m",
        lat: "12°97'22\" N",
        lon: "77°59'48\" E",
        time: "2026-08-30 12:45 GMT",
        shadow: "Small localized high-backscatter returns with hard shadow outline."
      },
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtSDVoNtGIxUF2PxKNRMxreUZl1NNk6c6e9xLAQ-rZJx1oNOIYLi5Xhhy7xIn0LWClxz-1qnxgl66AcRe_ttYexWUSi3T9XsJnVb2GCTWPOTnf0vmkPzk2_QBA6RSzWc7GKjQ7PcmkgvjtHKF_iDyPazhbxXL-vKhJ41dM-EvSXckSQ8fqUVn_V28g469RCuwoR-xHW_dfcQKWbybv5Dm_BGQE4SlILYE932_tAj8Gi-hFsAeC81AG"
    },
    {
      emoji: "📦",
      name: "Containers",
      desc: "Shipping containers lost during maritime cargo transits. They settle on soft sediment layers and create navigation/obstruction hazards.",
      risk: "MEDIUM",
      overlay: {
        boxId: "BOX-CON-04",
        class: "CARGO BOX",
        conf: "94.8%",
        dims: "6.1m x 2.4m",
        lat: "12°97'34\" N",
        lon: "77°59'56\" E",
        time: "2026-08-30 12:51 GMT",
        shadow: "Sharp rectangular shape with high intensity return edges."
      },
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3yIuijKiY8ZoRpcBOWSkTiImtpojKlCWitQtCTNbraMA2mV8qBW_j_XAVvY0pldpKOpHUR7XJp_SpTYrgkX_jzXMOYRO3y4xIQSiGOL7nxXntvBsoYLzVIzRP-5mhy9L3XKNvbZOG3NBMVNUcClPyZ7uJ-2fn-Rh19Y15LytqITGC9rvxOEpHZYuvhZGaTWzqiK2IT0z2xEPtnwONuaTgalcbkURXGcZGvvMiKv9UGUlSCt8EBLMe"
    },
    {
      emoji: "🚢",
      name: "Shipwrecks",
      desc: "Wreckage components, hull structures, and wreckage debris of wooden or metallic ships resting on benthic layers.",
      risk: "CRITICAL",
      overlay: {
        boxId: "BOX-WRK-02",
        class: "SHIPWRECK",
        conf: "98.2%",
        dims: "35.0m x 9.0m",
        lat: "12°97'48\" N",
        lon: "77°59'60\" E",
        time: "2026-08-30 12:58 GMT",
        shadow: "Vessel-shaped outline showing ribbing structure details."
      },
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3yIuijKiY8ZoRpcBOWSkTiImtpojKlCWitQtCTNbraMA2mV8qBW_j_XAVvY0pldpKOpHUR7XJp_SpTYrgkX_jzXMOYRO3y4xIQSiGOL7nxXntvBsoYLzVIzRP-5mhy9L3XKNvbZOG3NBMVNUcClPyZ7uJ-2fn-Rh19Y15LytqITGC9rvxOEpHZYuvhZGaTWzqiK2IT0z2xEPtnwONuaTgalcbkURXGcZGvvMiKv9UGUlSCt8EBLMe"
    },
    {
      emoji: "🏗️",
      name: "Artificial Objects",
      desc: "Man-made objects such as concrete blocks, machinery casings, metal sheets, and pipe segments dumped on seafloor layers.",
      risk: "HIGH",
      overlay: {
        boxId: "BOX-ART-11",
        class: "ARTIFICIAL OBJ",
        conf: "89.1%",
        dims: "4.8m x 2.2m",
        lat: "12°97'51\" N",
        lon: "77°59'66\" E",
        time: "2026-08-30 13:02 GMT",
        shadow: "Isolated anomaly showing strong geometric outlines."
      },
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtSDVoNtGIxUF2PxKNRMxreUZl1NNk6c6e9xLAQ-rZJx1oNOIYLi5Xhhy7xIn0LWClxz-1qnxgl66AcRe_ttYexWUSi3T9XsJnVb2GCTWPOTnf0vmkPzk2_QBA6RSzWc7GKjQ7PcmkgvjtHKF_iDyPazhbxXL-vKhJ41dM-EvSXckSQ8fqUVn_V28g469RCuwoR-xHW_dfcQKWbybv5Dm_BGQE4SlILYE932_tAj8Gi-hFsAeC81AG"
    },
    {
      emoji: "⚠️",
      name: "Unknown Anomalies",
      desc: "Unidentified acoustic backscatter signatures demonstrating geometric patterns that require closer inspection.",
      risk: "LOW",
      overlay: {
        boxId: "BOX-ANM-44",
        class: "ANOMALY",
        conf: "81.9%",
        dims: "1.2m x 0.8m",
        lat: "12°97'58\" N",
        lon: "77°59'72\" E",
        time: "2026-08-30 13:10 GMT",
        shadow: "Soft backscatter return showing low altitude shadow trails."
      },
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtSDVoNtGIxUF2PxKNRMxreUZl1NNk6c6e9xLAQ-rZJx1oNOIYLi5Xhhy7xIn0LWClxz-1qnxgl66AcRe_ttYexWUSi3T9XsJnVb2GCTWPOTnf0vmkPzk2_QBA6RSzWc7GKjQ7PcmkgvjtHKF_iDyPazhbxXL-vKhJ41dM-EvSXckSQ8fqUVn_V28g469RCuwoR-xHW_dfcQKWbybv5Dm_BGQE4SlILYE932_tAj8Gi-hFsAeC81AG"
    }
  ];

  const activeTarget = catalogItems[activeCatalogIndex];

  return (
    <section id="what-tarang-detects" className="space-y-md scroll-mt-md text-[13px]">
      {/* Title */}
      <h2 className="section-heading text-[#006194]">
        WHAT TARANG DETECTS
      </h2>

      <p className="body-text text-slate-500 mb-lg">
        Explore the seabed detection catalog to check how acoustic returns are processed into classified subsea files.
      </p>

      {/* Catalog Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg mt-md">
        
        {/* Left Side: Catalog Category Tabs */}
        <div className="lg:col-span-1 flex flex-col gap-xs">
          <span className="label-text text-slate-500 font-bold mb-xs px-sm">Target Registry Categories</span>
          {catalogItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveCatalogIndex(index)}
              className={`w-full flex items-center justify-between px-md py-md rounded-xl border text-[11px] font-bold uppercase transition-all duration-200 cursor-pointer text-left
                ${activeCatalogIndex === index 
                  ? 'border-primary bg-sky-50 text-[#006194] shadow-sm font-black' 
                  : 'border-outline-variant/60 text-slate-600 bg-white hover:bg-slate-50'
                }`}
            >
              <div className="flex items-center gap-sm">
                <span>{item.emoji}</span>
                <span>{item.name}</span>
              </div>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </button>
          ))}
        </div>

        {/* Right Side: Active Sonar Image + Description Catalog Page */}
        <div className="lg:col-span-2 glass-card rounded-xl p-lg bg-white border border-outline-variant flex flex-col md:flex-row gap-lg justify-between items-stretch shadow-sm min-h-[300px]">
          
          {/* Target details block */}
          <div className="flex-1 flex flex-col justify-between space-y-md">
            <div>
              <div className="flex justify-between items-center border-b border-outline-variant/40 pb-xs">
                <span className="sub-heading text-[#006194] font-bold">{activeTarget.name}</span>
                <span className={`px-sm py-[2px] rounded text-[8px] font-bold uppercase ${
                  activeTarget.risk === "CRITICAL" ? "bg-red-100 text-red-700" :
                  activeTarget.risk === "HIGH" ? "bg-orange-100 text-orange-700" :
                  activeTarget.risk === "MEDIUM" ? "bg-yellow-100 text-yellow-700" : "bg-blue-100 text-blue-700"
                }`}>
                  RISK: {activeTarget.risk}
                </span>
              </div>
              <p className="body-text mt-sm leading-relaxed text-slate-600">
                {activeTarget.desc}
              </p>
            </div>

            {/* Structured text attributes */}
            <div className="border-t border-outline-variant/30 pt-sm space-y-xs text-[10px] text-on-surface-variant">
              <div><strong>ACOUSTIC REFLECTION:</strong> {activeTarget.overlay.shadow}</div>
            </div>
          </div>

          {/* Sonar Image with AI hud overlays */}
          <div className="w-full md:w-56 h-60 rounded-xl border border-outline-variant bg-slate-900 overflow-hidden relative flex items-center justify-center shadow-inner self-center">
            <img 
              src={activeTarget.image} 
              alt="Sonar Category return" 
              className="w-full h-full object-cover opacity-85" 
            />
            {/* grid mesh overlay */}
            <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

            {/* Bounding Box HUD visual details overlay */}
            <div className="absolute border border-error bg-error/10 inset-4 flex flex-col justify-end p-xs pointer-events-none">
              {/* Overlay label parameters details */}
              <div className="bg-black/80 border border-outline-variant/40 p-[2px] rounded text-[7px] text-white leading-tight space-y-[1px]">
                <div className="font-bold text-red-400">{activeTarget.overlay.boxId}</div>
                <div>CLASS: {activeTarget.overlay.class}</div>
                <div>CONF: {activeTarget.overlay.conf}</div>
                <div>DIMS: {activeTarget.overlay.dims}</div>
                <div>LOC: {activeTarget.overlay.lat}, {activeTarget.overlay.lon}</div>
                <div>TIME: {activeTarget.overlay.time}</div>
                <div>RISK: {activeTarget.risk}</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhatTarangDetects;
