import React from 'react';
import { ChevronRight, ArrowRight, Cpu, Clock, ShieldCheck, CheckCircle2, Battery, Puzzle, Waves, Brain, Leaf, Target, MapPin, RefreshCw, Grip, Crosshair, AlertTriangle } from 'lucide-react';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import logo from './5.png';

export default function LandingPage({ onLaunch }) {
  const images = [img1, img2, img3, img4];

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-black relative" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 w-full bg-[#001a2c]/60 backdrop-blur-md border-b border-[#00e5ff]/20 z-50 py-4 px-8 md:px-16 lg:px-24 flex items-center">
        <img src={logo} alt="TARANG Logo" className="h-10 md:h-12 lg:h-14 w-auto object-contain brightness-0 invert opacity-90 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
      </div>

      {/* Scrollable Pages */}
      {images.map((src, idx) => (
        <div
          key={idx}
          className="relative h-screen w-full snap-start bg-cover bg-center flex items-center justify-center overflow-hidden"
          style={{ backgroundImage: `url(${src})` }}
        >
          {/* Subtle overlay so the image pops but isn't blinding */}
          <div className="absolute inset-0 bg-slate-900/10" />

          {/* First Page Specific UI */}
          {idx === 0 && (
             <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 lg:px-24">
                
                {/* Left Content Area */}
                <div className="z-10 flex flex-col items-start text-left text-white mt-32 lg:mt-0" style={{ maxWidth: '672px', width: '100%' }}>
                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-2xl font-sans">
                      AI-Driven Acoustic <br/>
                      Recognition & Automated <br/>
                      <span className="text-[#00e5ff]">Marine Debris Detection</span>
                   </h1>
                   
                   <p className="mt-6 text-base md:text-lg text-slate-100 drop-shadow-md leading-relaxed font-sans" style={{ maxWidth: '576px' }}>
                      Transforming raw Side-Scan Sonar (SSS) imagery into actionable, edge-processed geospatial intelligence for the Ministry of Earth Sciences (cite: 1).
                   </p>
                   
                   <button 
                      onClick={onLaunch}
                      className="mt-10 flex items-center gap-4 pl-6 pr-2 py-2 bg-gradient-to-r from-blue-800 to-cyan-500 hover:from-blue-700 hover:to-cyan-400 text-white font-semibold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg border border-cyan-400/30"
                      style={{ borderRadius: '9999px' }}
                   >
                      Let's start 
                      <div className="bg-white text-cyan-600 p-1.5 ml-2" style={{ borderRadius: '9999px' }}>
                        <ArrowRight className="w-5 h-5" strokeWidth={3} />
                      </div>
                   </button>
                </div>
                
                {/* Right UI Overlay Boxes (Hidden on small screens to preserve layout) */}
                <div className="hidden lg:block absolute inset-0 pointer-events-none">
                   
                   {/* Top Box */}
                   <div className="absolute top-[62%] right-[10%] xl:right-[15%] flex items-center">
                     <div className="w-2.5 h-2.5 bg-[#00e5ff] shadow-[0_0_12px_#00e5ff]" style={{ borderRadius: '9999px' }}></div>
                     <div className="w-24 h-[1px] bg-[#00e5ff]/60"></div>
                     <div className="border border-[#00e5ff]/40 bg-[#001a2c]/60 backdrop-blur-sm text-[#00e5ff] p-4 rounded text-sm min-w-[220px] shadow-[0_0_15px_rgba(0,229,255,0.15)] font-mono">
                       <div className="font-semibold tracking-wide">OBJECT DETECTED</div>
                       <div className="mt-1 text-slate-200">DEBRIS (%): 87%</div>
                       <div className="text-slate-200">CONFIDENCE</div>
                     </div>
                   </div>
                   
                   {/* Bottom Box */}
                   <div className="absolute top-[82%] right-[25%] xl:right-[30%] flex flex-col items-center">
                     <div className="flex items-center w-full justify-center">
                        <div className="w-2.5 h-2.5 bg-[#00e5ff] shadow-[0_0_12px_#00e5ff]" style={{ borderRadius: '9999px' }}></div>
                        <div className="w-16 h-[1px] bg-[#00e5ff]/60"></div>
                     </div>
                     <div className="border border-[#00e5ff]/40 bg-[#001a2c]/60 backdrop-blur-sm text-[#00e5ff] p-4 rounded text-sm min-w-[200px] shadow-[0_0_15px_rgba(0,229,255,0.15)] mt-1 ml-16 font-mono">
                       <div className="font-semibold tracking-wide">AREA 1</div>
                       <div className="mt-1 text-slate-200">DEBRIS (%): 87%</div>
                       <div className="text-slate-200">CONFIDENCE</div>
                     </div>
                   </div>
                   
                </div>
             </div>
          )}

          {/* Second Page Specific UI */}
          {idx === 1 && (
             <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-16 lg:pt-0">
                
                {/* Left Content Area */}
                <div className="w-full lg:w-[45%] z-10 flex flex-col items-start text-left text-white h-full justify-center lg:pl-8">
                   <h1 className="text-3xl lg:text-5xl font-bold leading-tight drop-shadow-2xl font-sans mb-1">
                      Built for <span className="text-[#00e5ff]">Real-World</span>
                   </h1>
                   <h1 className="text-4xl lg:text-[3.5rem] font-bold leading-none drop-shadow-2xl font-sans text-[#00e5ff] mb-5">
                      Marine <br/> Operations.
                   </h1>
                   
                   <p className="text-sm lg:text-base text-slate-100 drop-shadow-md leading-relaxed font-sans mb-8 lg:mb-16" style={{ maxWidth: '400px' }}>
                      TARANG combines advanced AI models with edge computing to deliver real-time insights in the harshest marine conditions.
                   </p>
                   
                   {/* Bottom Left Glassmorphic Box (Telemetry) */}
                   <div className="border border-[#00e5ff]/40 bg-[#001a2c]/60 backdrop-blur-md p-4 lg:p-6 shadow-[0_0_20px_rgba(0,229,255,0.15)] font-mono min-w-[220px] mb-10 lg:mb-0" style={{ borderRadius: '12px' }}>
                      <div className="text-[#00e5ff] text-xs lg:text-sm tracking-wide mb-1">LAT: 12.3456 N</div>
                      <div className="text-[#00e5ff] text-xs lg:text-sm tracking-wide mb-1">LON: 78.9012 E</div>
                      <div className="text-[#00e5ff] text-xs lg:text-sm tracking-wide mb-3">DEPTH: 874 m</div>
                      
                      <div className="h-[1px] w-full bg-[#00e5ff]/40 mb-4"></div>
                      
                      <div className="text-[#00e5ff] text-4xl lg:text-5xl font-bold mb-1">7</div>
                      <div className="text-[#00e5ff] text-[10px] lg:text-xs tracking-widest font-semibold leading-tight mt-1">OBJECTS<br/>DETECTED</div>
                   </div>
                </div>
                
                {/* Right Content Area (Grid) */}
                <div className="w-full lg:w-[50%] z-10 grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-5 lg:pr-8">
                   {[
                     { icon: <Cpu className="w-6 h-6 lg:w-8 lg:h-8 text-[#00e5ff] mb-2 lg:mb-3" />, title: "EDGE AI\nPROCESSING", desc: "On-device inference\nfor instant results" },
                     { icon: <Clock className="w-6 h-6 lg:w-8 lg:h-8 text-[#00e5ff] mb-2 lg:mb-3" />, title: "REAL-TIME\nINSIGHTS", desc: "Immediate detection\n& alerts" },
                     { icon: <ShieldCheck className="w-6 h-6 lg:w-8 lg:h-8 text-[#00e5ff] mb-2 lg:mb-3" />, title: "ROBUST &\nRELIABLE", desc: "Built for extreme\nmarine conditions" },
                     { icon: <CheckCircle2 className="w-6 h-6 lg:w-8 lg:h-8 text-[#00e5ff] mb-2 lg:mb-3" />, title: "MISSION\nREADY", desc: "Autonomous &\ndeployment ready" },
                     { icon: <Battery className="w-6 h-6 lg:w-8 lg:h-8 text-[#00e5ff] mb-2 lg:mb-3" />, title: "LOW POWER\nOPTIMIZED", desc: "Efficient edge\ncomputing" },
                     { icon: <Puzzle className="w-6 h-6 lg:w-8 lg:h-8 text-[#00e5ff] mb-2 lg:mb-3" />, title: "SCALABLE\nMODULAR", desc: "Easily adaptable to\ndifferent missions" }
                   ].map((card, i) => (
                      <div key={i} className="flex flex-col items-center text-center border border-[#00e5ff]/30 bg-[#001a2c]/50 backdrop-blur-md p-4 lg:p-5 shadow-lg hover:bg-[#001a2c]/70 transition-colors" style={{ borderRadius: '16px' }}>
                         {card.icon}
                         <div className="text-white font-bold text-[10px] lg:text-xs tracking-wider leading-tight whitespace-pre-line mb-2">
                            {card.title}
                         </div>
                         <div className="w-6 h-[1.5px] bg-[#00e5ff]/60 mb-2"></div>
                         <div className="text-slate-300 text-[9px] lg:text-[11px] leading-snug whitespace-pre-line">
                            {card.desc}
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          )}

          {/* Third Page Specific UI */}
          {idx === 2 && (
             <div className="absolute inset-0 flex flex-col justify-between px-6 md:px-12 lg:px-20 pt-16 lg:pt-20 pb-10">
                
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row w-full justify-between flex-1 relative">
                   
                   {/* Left Content */}
                   <div className="w-full lg:w-[45%] z-10 flex flex-col items-start text-left text-white h-full justify-center lg:pl-4">
                      <h1 className="text-3xl lg:text-[2.5rem] font-bold leading-tight drop-shadow-2xl font-sans mb-1">
                         The Ultimate Edge Platform for
                      </h1>
                      <h1 className="text-3xl lg:text-[2.5rem] font-bold leading-tight drop-shadow-2xl font-sans text-[#00e5ff] mb-4">
                         Autonomous Marine Surveillance.
                      </h1>
                      
                      <p className="text-xs lg:text-sm text-slate-100 drop-shadow-md leading-relaxed font-sans mb-6" style={{ maxWidth: '480px' }}>
                         Engineered for extreme operational environments where radio signals fail. From tracking submerged ghost nets that endanger marine ecosystems to generating precise, geotagged hazard coordinates and richly prioritized recovery paths, TARANG bridges the gap between raw acoustic feedback and actionable environmental protection.
                      </p>
                      
                      <div className="flex flex-col gap-4 w-full" style={{ maxWidth: '450px' }}>
                         {[
                           { icon: <Waves className="w-5 h-5 text-[#00e5ff]" />, title: "ACOUSTIC EXCELLENCE", desc: "High-resolution Side-Scan Sonar (SSS)\nfor superior object detection." },
                           { icon: <Brain className="w-5 h-5 text-[#00e5ff]" />, title: "AI-DRIVEN INTELLIGENCE", desc: "Onboard AI models filter noise, detect\ndebris, and classify anomalies in real time." },
                           { icon: <Leaf className="w-5 h-5 text-[#00e5ff]" />, title: "ENVIRONMENTAL IMPACT", desc: "Protecting marine life and supporting\nsustainable ocean operations." }
                         ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                               <div className="p-2.5 border border-[#00e5ff]/30 bg-[#001a2c]/50 flex-shrink-0 shadow-inner" style={{ borderRadius: '9999px' }}>
                                  {item.icon}
                               </div>
                               <div className="mt-1">
                                  <h3 className="text-[#00e5ff] font-bold text-[11px] lg:text-xs tracking-wider mb-0.5">{item.title}</h3>
                                  <p className="text-slate-300 text-[10px] whitespace-pre-line leading-relaxed">{item.desc}</p>
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>
                   
                   {/* Right Overlays (Hidden on small screens) */}
                   <div className="hidden lg:block absolute inset-0 pointer-events-none">
                      {/* Top Overlay */}
                      <div className="absolute top-[12%] right-[5%] flex items-center gap-2">
                         <div className="border border-[#00e5ff]/40 bg-[#001a2c]/60 backdrop-blur-md p-3 rounded-lg shadow-[0_0_15px_rgba(0,229,255,0.15)] font-mono flex items-center gap-4">
                            <div>
                               <div className="text-[#00e5ff] text-[9px] tracking-wide mb-1">TARGET DETECTED</div>
                               <div className="text-white font-bold text-xs tracking-wide mb-1">GHOST NET</div>
                               <div className="text-slate-300 text-[9px] tracking-wide">87% CONFIDENCE</div>
                            </div>
                            <div className="w-16 h-12 bg-slate-800/80 rounded border border-[#00e5ff]/30 flex items-center justify-center">
                               <Waves className="w-4 h-4 text-[#00e5ff]/50" />
                            </div>
                         </div>
                         <div className="w-12 h-[1px] bg-[#00e5ff]/60"></div>
                         <div className="w-2 h-2 bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" style={{ borderRadius: '9999px' }}></div>
                      </div>
                      
                      {/* Bottom Overlay */}
                      <div className="absolute top-[52%] right-[10%] flex items-center gap-2">
                         <div className="w-2 h-2 bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" style={{ borderRadius: '9999px' }}></div>
                         <div className="w-16 h-[1px] bg-[#00e5ff]/60"></div>
                         <div className="border border-[#00e5ff]/40 bg-[#001a2c]/60 backdrop-blur-md p-3 rounded-lg shadow-[0_0_15px_rgba(0,229,255,0.15)] font-mono flex items-center gap-4">
                            <div>
                               <div className="text-[#00e5ff] text-[9px] tracking-wide mb-1">TARGET DETECTED</div>
                               <div className="text-white font-bold text-xs tracking-wide mb-1">PLASTIC DEBRIS</div>
                               <div className="text-slate-300 text-[9px] tracking-wide">92% CONFIDENCE</div>
                            </div>
                            <div className="w-16 h-12 bg-slate-800/80 rounded border border-[#00e5ff]/30 flex items-center justify-center">
                               <Waves className="w-4 h-4 text-[#00e5ff]/50" />
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                
                {/* Bottom Stats Bar */}
                <div className="w-full z-10 border border-[#00e5ff]/30 bg-[#001a2c]/50 backdrop-blur-md p-4 lg:p-5 shadow-lg flex flex-wrap lg:flex-nowrap justify-between gap-4 mt-4 lg:mt-0 lg:mb-4" style={{ borderRadius: '16px' }}>
                   {[
                     { icon: <Target className="w-5 h-5 lg:w-6 lg:h-6 text-[#00e5ff]" />, stat: "1M+", title: "SQ. KM SCANNED", desc: "Potential coverage" },
                     { icon: <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-[#00e5ff]" />, stat: "10K+", title: "HAZARD COORDINATES", desc: "Generated with precision" },
                     { icon: <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6 text-[#00e5ff]" />, stat: "95%+", title: "DETECTION ACCURACY", desc: "In complex environments" },
                     { icon: <RefreshCw className="w-5 h-5 lg:w-6 lg:h-6 text-[#00e5ff]" />, stat: "24/7", title: "AUTONOMOUS OPERATION", desc: "Mission-ready reliability" }
                   ].map((item, i) => (
                      <div key={i} className={`flex flex-col items-center text-center w-[45%] lg:w-1/4 ${i !== 3 ? 'lg:border-r lg:border-[#00e5ff]/20' : ''}`}>
                         {item.icon}
                         <div className="text-[#00e5ff] font-bold text-xl lg:text-3xl mt-1.5 lg:mt-2 mb-1">{item.stat}</div>
                         <div className="text-white font-bold text-[9px] lg:text-[11px] tracking-widest mb-1">{item.title}</div>
                         <div className="text-slate-300 text-[8px] lg:text-[10px]">{item.desc}</div>
                      </div>
                   ))}
                </div>
                
             </div>
          )}

          {/* Fourth Page Specific UI */}
          {idx === 3 && (
             <div className="absolute inset-0 flex flex-col lg:flex-row justify-between px-6 md:px-12 lg:px-20 pt-16 lg:pt-24 pb-10">
                
                {/* Left Content Area */}
                <div className="w-full lg:w-[45%] z-10 flex flex-col items-start text-left text-white h-full justify-start lg:pl-4">
                   <div className="text-[#00e5ff] text-sm md:text-base font-semibold mb-2">Sargassum is a big problem...</div>
                   
                   <h1 className="text-3xl lg:text-[2.75rem] font-bold leading-tight drop-shadow-2xl font-sans mb-1">
                      Eliminating Manual <br/> Inspection Bottlenecks in <br/>
                      <span className="text-[#00e5ff]">Deep-Sea Bathymetry.</span>
                   </h1>
                   
                   <p className="text-sm lg:text-[15px] text-slate-100 drop-shadow-md leading-relaxed font-sans mt-6 mb-10" style={{ maxWidth: '500px' }}>
                      Traditional sonar analysis relies on slow, tedious, and error-prone manual interpretation <span className="text-[#00e5ff]">(cite: 1)</span>. TARANG deploys a multi-stage computer vision pipeline using YOLOv8 and U-Net architectures to instantly filter speckle noise, identify artificial debris from complex natural seabed topology, and classify underwater anomalies without heavy human intervention <span className="text-[#00e5ff]">(cite: 1)</span>.
                   </p>
                   
                   <div className="flex flex-wrap gap-4 mt-auto lg:mt-6">
                      {[
                        { icon: <Grip className="w-7 h-7 text-[#00e5ff]" />, title: "SPECKLE\nNOISE FILTER" },
                        { icon: <Crosshair className="w-7 h-7 text-[#00e5ff]" />, title: "DEBRIS\nDETECTION" },
                        { icon: <AlertTriangle className="w-7 h-7 text-[#00e5ff]" />, title: "ANOMALY\nCLASSIFICATION" }
                      ].map((item, i) => (
                         <div key={i} className="flex flex-col items-center justify-center border border-[#00e5ff]/30 bg-[#001a2c]/50 backdrop-blur-md p-4 w-[110px] lg:w-[130px] h-[110px] lg:h-[130px] shadow-lg hover:bg-[#001a2c]/70 transition-colors" style={{ borderRadius: '12px' }}>
                            {item.icon}
                            <div className="text-white font-bold text-[9px] lg:text-[10px] tracking-wider text-center mt-3 lg:mt-4 whitespace-pre-line leading-tight">
                               {item.title}
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
                
                {/* Right Content Area */}
                <div className="w-full lg:w-[45%] z-10 flex flex-col items-start lg:items-start text-left lg:text-left text-white h-full justify-start mt-8 lg:mt-0 lg:pr-4 relative">
                   <h1 className="text-2xl lg:text-[2.2rem] font-bold leading-tight drop-shadow-2xl font-sans mb-1" style={{ maxWidth: '450px' }}>
                      The Ultimate Edge Platform for
                   </h1>
                   <h1 className="text-2xl lg:text-[2.2rem] font-bold leading-tight drop-shadow-2xl font-sans text-[#00e5ff] mb-4" style={{ maxWidth: '450px' }}>
                      Autonomous Marine Surveillance.
                   </h1>
                   
                   {/* Overlays on Right Image Area */}
                   <div className="hidden lg:block absolute inset-0 pointer-events-none">
                      {/* Target Detected Overlay */}
                      <div className="absolute bottom-[25%] right-[5%] flex items-center gap-2">
                         <div className="w-2 h-2 bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" style={{ borderRadius: '9999px' }}></div>
                         <div className="w-12 h-[1px] bg-[#00e5ff]/60"></div>
                         <div className="border border-[#00e5ff]/40 bg-[#001a2c]/60 backdrop-blur-md p-3 rounded-lg shadow-[0_0_15px_rgba(0,229,255,0.15)] font-mono flex items-center gap-4">
                            <div className="w-20 h-14 bg-slate-800/80 rounded border border-[#00e5ff]/30 flex items-center justify-center overflow-hidden">
                               <img src={img3} alt="Debris" className="w-full h-full object-cover opacity-60 mix-blend-screen" />
                            </div>
                            <div className="text-left">
                               <div className="text-[#00e5ff] text-[10px] tracking-wide mb-1">TARGET:</div>
                               <div className="text-[#00e5ff] font-bold text-xs tracking-wide">POTENTIAL DEBRIS</div>
                            </div>
                         </div>
                      </div>
                      
                      {/* AUV Status Overlay */}
                      <div className="absolute bottom-[5%] right-[30%] flex items-center gap-2">
                         <div className="w-2 h-2 bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" style={{ borderRadius: '9999px' }}></div>
                         <div className="w-12 h-[1px] bg-[#00e5ff]/60"></div>
                         <div className="border border-[#00e5ff]/40 bg-[#001a2c]/60 backdrop-blur-md p-3 px-5 rounded-lg shadow-[0_0_15px_rgba(0,229,255,0.15)] font-mono flex items-center gap-3">
                            <Crosshair className="w-6 h-6 text-[#00e5ff]" />
                            <div className="text-left">
                               <div className="text-white font-bold text-xs tracking-wide mb-0.5">AUV</div>
                               <div className="text-[#00e5ff] text-[10px] tracking-wide">STATUS: ACTIVE</div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          )}
        </div>
      ))}


    </div>
  );
}
