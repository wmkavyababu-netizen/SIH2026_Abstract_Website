import React from 'react';
import { 
  Waves, 
  VolumeX, 
  ScanLine, 
  Ruler, 
  Layers, 
  MapPin, 
  Ship, 
  FileText 
} from 'lucide-react';

const OurSolution = () => {
  const stages = [
    {
      num: "01",
      title: "SONAR INPUT & NORMALIZATION",
      desc: "Ingests raw side-scan sonar files (.XTF / .JSF) and equalizes acoustic backscatter profiles across ranges to standardize returns.",
      icon: <Waves className="w-8 h-8 text-blue-500" />,
      color: "from-blue-50 to-sky-100/30"
    },
    {
      num: "02",
      title: "NOISE SUPPRESSION",
      desc: "Attenuates signal speckle noise, resolution variations, and sensor movement disturbances while preserving edge boundaries of anomalies.",
      icon: <VolumeX className="w-8 h-8 text-teal-500" />,
      color: "from-teal-50 to-emerald-100/30"
    },
    {
      num: "03",
      title: "AI DETECTION",
      desc: "Flags potential anthropogenic anomalies using custom deep CNN models, drawing bounding boxes and extracting pixel-level masks.",
      icon: <ScanLine className="w-8 h-8 text-indigo-500" />,
      color: "from-indigo-50 to-violet-100/30"
    },
    {
      num: "04",
      title: "PHYSICS-ASSISTED VALIDATION",
      desc: "Validates object dimensions using shadow height and sensor geometry calculations rather than visual AI classification alone.",
      parameters: ["SHADOW GEOMETRY", "ALTITUDE", "SLANT RANGE", "SEABED CONTEXT"],
      icon: <Ruler className="w-8 h-8 text-rose-500" />,
      color: "from-rose-50 to-pink-100/30"
    },
    {
      num: "05",
      title: "DUPLICATE FUSION",
      desc: "Uses spatial-temporal evidence and clustering (DBSCAN) to fuse multiple redundant passes of the same target across overlapping survey lines.",
      icon: <Layers className="w-8 h-8 text-amber-500" />,
      color: "from-amber-50 to-orange-100/30"
    },
    {
      num: "06",
      title: "GEO-TAGGING & RISK SCORING",
      desc: "Computes coordinates by syncing sensor offsets and scores hazard indexes based on object footprint, material type, and local depth profiles.",
      parameters: ["LATITUDE", "LONGITUDE", "TIMESTAMP", "DIMENSIONS"],
      icon: <MapPin className="w-8 h-8 text-red-500" />,
      color: "from-red-50 to-rose-100/30"
    },
    {
      num: "07",
      title: "CLEANUP MISSION PLANNING",
      desc: "Clusters target hotspots and plans optimized logistic voyage paths for recovery vessels and ROV operations.",
      icon: <Ship className="w-8 h-8 text-cyan-500" />,
      color: "from-cyan-50 to-sky-100/30"
    },
    {
      num: "08",
      title: "GIS REPORTING",
      desc: "Compiles geo-referenced operational outputs and risk layers, exporting standardized formats for maritime agencies.",
      flow: "JSON • CSV • GeoJSON",
      icon: <FileText className="w-8 h-8 text-fuchsia-500" />,
      color: "from-fuchsia-50 to-purple-100/30"
    }
  ];

  return (
    <section id="our-solution" className="space-y-xl scroll-mt-md bg-white p-lg rounded-2xl border border-outline-variant/40 shadow-sm select-none">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="section-heading text-4xl font-extrabold text-[#006194] mb-4">
          OUR SOLUTION — CONNECTED WORKFLOW
        </h2>
        <p className="body-text text-slate-500 text-lg">
          Tarang operates as a connected process roadmap, grouping raw acoustic inputs into unified, actionable geospatial intelligence.
        </p>
      </div>

      {/* Grid Layout for Stages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {/* Decorative connecting lines for desktop */}
        <div className="hidden lg:block absolute top-[50%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent -z-10" />

        {stages.map((stage, index) => (
          <div 
            key={index}
            className={`relative flex flex-col h-full bg-gradient-to-b ${stage.color} rounded-2xl p-6 border border-white/60 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-10px_rgba(0,97,148,0.2)] hover:-translate-y-1 transition-all duration-300 group`}
          >
            {/* Stage Number Badge */}
            <div className="absolute -top-3 -right-3 bg-white text-slate-800 font-black text-lg w-10 h-10 rounded-xl shadow-md flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform group-hover:text-[#006194]">
              {stage.num}
            </div>

            {/* Icon */}
            <div className="bg-white/80 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm backdrop-blur-sm mb-5 border border-white">
              {stage.icon}
            </div>

            {/* Content */}
            <h4 className="font-bold text-slate-800 text-md mb-3 min-h-[48px] uppercase tracking-wide">
              {stage.title}
            </h4>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-grow">
              {stage.desc}
            </p>

            {/* Badges / Outputs at the bottom */}
            <div className="mt-auto space-y-3">
              {stage.parameters && (
                <div className="flex flex-wrap gap-1.5">
                  {stage.parameters.map((param, pIdx) => (
                    <span key={pIdx} className="bg-white/70 border border-slate-200/60 text-slate-700 px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-wider backdrop-blur-md">
                      {param}
                    </span>
                  ))}
                </div>
              )}

              {stage.flow && (
                <div className="bg-[#006194] text-white rounded-lg px-3 py-2 text-xs font-bold text-center tracking-widest shadow-inner">
                  {stage.flow}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurSolution;
