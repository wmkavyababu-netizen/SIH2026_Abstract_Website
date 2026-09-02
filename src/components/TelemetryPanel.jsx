import React from 'react';

const TelemetryPanel = () => {
  return (
    <section id="dashboard" className="space-y-md scroll-mt-md text-[13px]">
      {/* Title */}
      <h2 className="section-heading text-[#006194]">
        DASHBOARD DEMONSTRATION
      </h2>

      <p className="body-text text-slate-500 mb-lg">
        Explore the operational processing flow of the TARANG dashboard. Detections are resolved sequentially from sonar feeds to reports.
      </p>

      {/* Visual Flow Indicator Block */}
      <div className="bg-sky-50 border border-[#cce5ff] rounded-xl p-md flex flex-wrap justify-between gap-xs text-[9px] text-center font-bold text-[#006194] uppercase shadow-sm">
        <span>SONAR FEED</span>
        <span>→</span>
        <span>DETECTION</span>
        <span>→</span>
        <span>VERIFICATION</span>
        <span>→</span>
        <span>MAP LAYERS</span>
        <span>→</span>
        <span>RISK SCORING</span>
        <span>→</span>
        <span>CLEANUP PLAN</span>
        <span>→</span>
        <span>REPORT GENERATION</span>
      </div>

      {/* Unified responsive dashboard grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mt-md">
        
        {/* 1. SSS INGESTION FEED */}
        <div className="md:col-span-2 order-1 glass-card rounded-xl border border-outline-variant bg-white overflow-hidden shadow-sm flex flex-col justify-between h-[450px]">
          <div className="border-b border-outline-variant px-md py-sm bg-slate-50 flex justify-between items-center">
            <span className="font-bold text-[#006194] text-[12px] uppercase">1. Side-Scan Sonar Ingestion Feed</span>
            <span className="bg-[#cce5ff] text-[#006194] text-[9px] px-sm py-[2px] rounded font-bold">DEMO WATERFALL FEED</span>
          </div>

          <div className="p-md flex-grow h-64 relative bg-slate-950 flex items-center justify-center overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtSDVoNtGIxUF2PxKNRMxreUZl1NNk6c6e9xLAQ-rZJx1oNOIYLi5Xhhy7xIn0LWClxz-1qnxgl66AcRe_ttYexWUSi3T9XsJnVb2GCTWPOTnf0vmkPzk2_QBA6RSzWc7GKjQ7PcmkgvjtHKF_iDyPazhbxXL-vKhJ41dM-EvSXckSQ8fqUVn_V28g469RCuwoR-xHW_dfcQKWbybv5Dm_BGQE4SlILYE932_tAj8Gi-hFsAeC81AG" 
              alt="Side-Scan Sonar Feed Ingestion" 
              className="w-full h-full object-contain rounded opacity-95 border border-outline-variant/30"
            />
            {/* Visual bounding boxes overlays */}
            <div className="absolute top-[20%] left-[30%] w-24 h-16 border border-[#ba1a1a] bg-[#ba1a1a]/10 flex flex-col justify-end p-[2px] pointer-events-none">
              <span className="bg-[#ba1a1a] text-white text-[7px] font-bold px-[2px] py-[1px] w-fit uppercase">Ghost Net: 92%</span>
            </div>
            <div className="absolute top-[55%] right-[20%] w-16 h-16 border border-[#ac6200] bg-[#ac6200]/10 flex flex-col justify-end p-[2px] pointer-events-none">
              <span className="bg-[#ac6200] text-white text-[7px] font-bold px-[2px] py-[1px] w-fit uppercase">Cargo Drum: 88%</span>
            </div>
          </div>

          <div className="p-md bg-slate-50 border-t border-outline-variant space-y-xs">
            <div className="font-bold text-[#006194] uppercase text-[10px]">Ingestion & Detection Analysis:</div>
            <p className="body-text text-slate-600 text-[13px]">
              Processes live side-scan sonar returns, identifies objects, draws bounding boxes, separates acoustic shadows, and profiles classes and confidence levels.
            </p>
          </div>
        </div>

        {/* 2. TARGET INFORMATION */}
        <div className="col-span-1 order-2 lg:order-3 bg-surface border border-outline-variant p-md rounded-xl space-y-xs flex flex-col justify-between">
          <div>
            <div className="font-bold text-[#006194] text-[10px] uppercase border-b border-outline-variant/40 pb-sm mb-sm">TARGET INFORMATION (DEMO)</div>
            <ul className="text-[11px] text-slate-600 space-y-[4px]">
              <li>• <strong>TARGET ID</strong>: TRG-ANM-23</li>
              <li>• <strong>CLASS</strong>: Ghost Net</li>
              <li>• <strong>CONFIDENCE</strong>: 92.4%</li>
              <li>• <strong>LATITUDE</strong>: 12.97163 N</li>
              <li>• <strong>LONGITUDE</strong>: 77.59462 E</li>
              <li>• <strong>DEPTH</strong>: 45.2 meters</li>
              <li>• <strong>DIMENSIONS</strong>: 15.0m x 4.0m</li>
              <li>• <strong>TIMESTAMP</strong>: 2026-08-30 GMT</li>
              <li>• <strong>RISK SCORE</strong>: 85 / 100</li>
              <li>• <strong>STATUS</strong>: Pending</li>
            </ul>
          </div>
          <span className="text-[8px] text-slate-400 uppercase tracking-widest mt-sm block">ILLUSTRATIVE SCHEMA</span>
        </div>

        {/* 3. 2D RELATIVE MAP */}
        <div className="md:col-span-2 lg:col-span-2 order-3 lg:order-2 glass-card rounded-xl border border-outline-variant bg-white overflow-hidden shadow-sm flex flex-col justify-between h-[450px]">
          <div className="border-b border-outline-variant px-md py-sm bg-slate-50 flex justify-between items-center">
            <span className="font-bold text-[#006194] text-[12px] uppercase">2. 2D Relative Trajectory Map</span>
            <span className="bg-[#cce5ff] text-[#006194] text-[9px] px-sm py-[2px] rounded font-bold">DEMO SPATIAL LAYOUT</span>
          </div>

          <div className="p-md flex-grow h-64 relative bg-slate-950 flex items-center justify-center overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3yIuijKiY8ZoRpcBOWSkTiImtpojKlCWitQtCTNbraMA2mV8qBW_j_XAVvY0pldpKOpHUR7XJp_SpTYrgkX_jzXMOYRO3y4xIQSiGOL7nxXntvBsoYLzVIzRP-5mhy9L3XKNvbZOG3NBMVNUcClPyZ7uJ-2fn-Rh19Y15LytqITGC9rvxOEpHZYuvhZGaTWzqiK2IT0z2xEPtnwONuaTgalcbkURXGcZGvvMiKv9UGUlSCt8EBLMe" 
              alt="2D Relative Trajectory Map" 
              className="w-full h-full object-contain rounded opacity-95 border border-outline-variant/30"
            />
            {/* Draw mock coordinates grid lines on map */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 10,80 L 30,60 L 50,70 L 70,30 L 90,15" fill="none" stroke="#006194" strokeWidth="1.2" strokeDasharray="3,3" />
              <circle cx="90" cy="15" fill="#006194" r="3" />
              <circle cx="30" cy="60" fill="#ba1a1a" r="2.5" />
              <circle cx="70" cy="30" fill="#ac6200" r="2.5" />
            </svg>
          </div>

          <div className="p-md bg-slate-50 border-t border-outline-variant space-y-xs">
            <div className="font-bold text-[#006194] uppercase text-[10px]">Trajectory Mapping:</div>
            <p className="body-text text-slate-600 text-[13px]">
              Syncs target files, overlaying survey paths, sonar swaths, target locations, detection clusters, and risk priority coordinates.
            </p>
          </div>
        </div>

        {/* 4. DUPLICATE FUSION */}
        <div className="col-span-1 order-4 lg:order-4 bg-surface border border-outline-variant p-md rounded-xl space-y-xs flex flex-col justify-between">
          <div>
            <div className="font-bold text-[#006194] text-[10px] uppercase border-b border-outline-variant/40 pb-sm mb-sm">DUPLICATE FUSION</div>
            <p className="body-text text-slate-600 text-[12px] leading-relaxed">
              Compares overlapping survey runs to merge multiple adjacent detections into exactly one verified coordinates profile.
            </p>
          </div>
          <div className="bg-sky-50 border border-sky-100 p-xs rounded font-bold text-[#006194] text-[8px] text-center mt-sm uppercase">
            MULTIPLE DETECTIONS → ONE VERIFIED OBJECT
          </div>
        </div>

        {/* 5. RISK PRIORITIZATION */}
        <div className="col-span-1 order-5 lg:order-5 bg-surface border border-outline-variant p-md rounded-xl space-y-xs flex flex-col justify-between">
          <div>
            <div className="font-bold text-[#006194] text-[10px] uppercase border-b border-outline-variant/40 pb-sm mb-sm">RISK PRIORITIZATION</div>
            <p className="body-text text-slate-600 text-[12px] leading-relaxed">
              Classifies seabed debris hazard indexes to guide recovery priorities based on footprint severity and location.
            </p>
          </div>
          <div className="flex gap-xs text-[8px] font-bold text-center mt-sm">
            <span className="flex-1 bg-red-100 text-red-700 p-[2px] rounded">CRITICAL</span>
            <span className="flex-1 bg-orange-100 text-orange-700 p-[2px] rounded">HIGH</span>
            <span className="flex-1 bg-yellow-100 text-yellow-700 p-[2px] rounded">MED</span>
            <span className="flex-1 bg-blue-100 text-blue-700 p-[2px] rounded">LOW</span>
          </div>
        </div>

        {/* 6. CLEANUP PLANNING */}
        <div className="col-span-1 order-6 lg:order-6 bg-surface border border-outline-variant p-md rounded-xl space-y-xs flex flex-col justify-between">
          <div>
            <div className="font-bold text-[#006194] text-[10px] uppercase border-b border-outline-variant/40 pb-sm mb-sm">CLEANUP PLANNING</div>
            <p className="body-text text-slate-600 text-[12px] leading-relaxed">
              Clusters target hotspots and outputs optimized recovery paths for mission vessels.
            </p>
          </div>
          <div className="bg-sky-50 border border-sky-100 p-xs rounded font-bold text-[#006194] text-[8px] text-center mt-sm uppercase">
            TARGET CLUSTERS → PRIORITY → ROUTE → RECOVERY PLAN
          </div>
        </div>

        {/* 7. REPORT OUTPUTS */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4 order-7 lg:order-7 bg-slate-50 border border-outline-variant p-sm rounded-lg flex flex-col sm:flex-row justify-between items-center gap-xs text-[11px] text-on-surface-variant">
          <span className="body-text text-slate-500"><strong>STANDARDIZED REPORT OUTPUT:</strong> Compiles records into common GIS folders.</span>
          <div className="flex gap-sm font-bold text-[#006194] text-[10px]">
            <span className="bg-white px-sm border rounded">JSON</span>
            <span className="bg-white px-sm border rounded">CSV</span>
            <span className="bg-white px-sm border rounded">GeoJSON</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TelemetryPanel;
