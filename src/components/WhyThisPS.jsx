import React from 'react';
import { 
  AlertTriangle, 
  Map, 
  Search, 
  Target, 
  LineChart,
  Landmark,
  ShieldAlert,
  Ship,
  Microscope
} from 'lucide-react';

const WhyThisPS = () => {
  const problemJourney = [
    {
      num: "01",
      title: "CRITICAL ENVIRONMENTAL THREAT",
      desc: "Seabed debris such as ghost nets, containers and artificial objects damage habitats and disrupt fisheries while remaining difficult to map across India's vast waters.",
      icon: <AlertTriangle className="w-8 h-8 text-rose-500" />,
      color: "from-rose-50 to-rose-100/50",
      borderColor: "border-rose-200"
    },
    {
      num: "02",
      title: "EXISTING EFFORTS FOCUS ON COASTS",
      desc: "Existing marine-litter campaigns are important, but subsea debris requires systematic sonar-based detection, mapping and prioritization.",
      icon: <Map className="w-8 h-8 text-amber-500" />,
      color: "from-amber-50 to-amber-100/50",
      borderColor: "border-amber-200"
    },
    {
      num: "03",
      title: "FRAGMENTED SURVEYS",
      desc: "Current sonar surveys are often project-specific and manually interpreted, leading to duplicate counts and inconsistent cleanup decisions.",
      icon: <Search className="w-8 h-8 text-sky-500" />,
      color: "from-sky-50 to-sky-100/50",
      borderColor: "border-sky-200"
    },
    {
      num: "04",
      title: "STRONG POLICY ALIGNMENT",
      desc: "TARANG turns existing sonar data into actionable intelligence supporting marine science, ocean governance, and India's blue economy.",
      icon: <Target className="w-8 h-8 text-indigo-500" />,
      color: "from-indigo-50 to-indigo-100/50",
      borderColor: "border-indigo-200"
    },
    {
      num: "05",
      title: "HIGH FEASIBILITY",
      desc: "The system combines available Side-Scan Sonar data, AI and GIS to create a highly scalable and effective seabed intelligence workflow.",
      icon: <LineChart className="w-8 h-8 text-teal-500" />,
      color: "from-teal-50 to-teal-100/50",
      borderColor: "border-teal-200"
    }
  ];

  const timelineEvents = [
    {
      year: "2021",
      event: "Deep Ocean Mission Approved",
      desc: "The Govt of India approved the multi-agency Deep Ocean Mission to develop deep-sea technologies and seabed mapping capabilities.",
      matters: "Established the national research foundation for manned subsea exploration.",
      source: "MoES",
      icon: <Landmark className="w-6 h-6" />
    },
    {
      year: "2022",
      event: "Swachh Sagar Initiative Launched",
      desc: "A massive 75-day coastal citizen cleanup drive covering 75 beaches along India's coastline to clear tonnes of plastic waste.",
      matters: "Highlighted the total lack of systematic deep subsea mapping assets.",
      source: "MoES",
      icon: <ShieldAlert className="w-6 h-6" />
    },
    {
      year: "2023",
      event: "Ghost-Net Marine Research Results",
      desc: "ICAR-CMFRI published detailed findings on the distribution of Abandoned, Lost or Discarded Fishing Gear (ALDFG) off the Kerala coast.",
      matters: "Proved the threat of ghost gear on benthic ecosystems and shipwrecks.",
      source: "CMFRI",
      icon: <Ship className="w-6 h-6" />
    },
    {
      year: "2026",
      event: "TARANG Problem Context Formulated",
      desc: "MoES and NIOT set the SIH 2026 challenge to develop automated, multi-vendor sonar processing models to map deep-sea debris.",
      matters: "Recognized the need to turn scattered records into a unified atlas.",
      source: "NIOT & SIH 2026",
      icon: <Microscope className="w-6 h-6" />
    }
  ];

  return (
    <section id="why-this-problem-statement" className="space-y-xl scroll-mt-md bg-slate-50/50 p-lg rounded-2xl border border-outline-variant/40 shadow-sm select-none">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="section-heading text-4xl font-extrabold bg-gradient-to-r from-[#006194] to-sky-500 bg-clip-text text-transparent mb-4">
          WHY THIS PROBLEM STATEMENT?
        </h2>
        <p className="body-text text-slate-600 text-lg">
          The critical journey from identifying an environmental threat to formulating a scalable technological solution.
        </p>
      </div>

      {/* 5-Stage Problem-to-Impact Journey */}
      <div className="space-y-md">
        <h3 className="sub-heading text-[#006194] flex items-center gap-3 text-xl mb-8">
          <span className="w-8 h-1 bg-[#006194] rounded-full inline-block"></span>
          THE UNMAPPED SEABED
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemJourney.map((step, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-gradient-to-br ${step.color} border ${step.borderColor}`}
            >
              <div className="absolute -right-4 -bottom-4 text-9xl font-black text-black/5 select-none pointer-events-none transition-transform group-hover:scale-110">
                {step.num}
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="bg-white/80 p-3 rounded-2xl inline-block shadow-sm backdrop-blur-sm mb-5">
                    {step.icon}
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg mb-3 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-t border-slate-200/80 w-full my-16" />

      {/* WHY NOW? Historical Milestone Chronology */}
      <div className="space-y-md">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h3 className="sub-heading text-[#006194] flex items-center gap-3 text-xl mb-3">
              <span className="w-8 h-1 bg-[#006194] rounded-full inline-block"></span>
              WHY NOW?
            </h3>
            <p className="body-text text-slate-500 max-w-2xl">
              Trace the milestones of Indian ocean observation, marine litter regulations, and subsea initiatives leading to the deployment of TARANG.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {timelineEvents.map((ev, index) => (
            <div 
              key={index}
              className="flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm p-6 hover:border-[#006194]/40 hover:shadow-md transition-all relative overflow-hidden group"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-[#006194] opacity-70 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center justify-center bg-sky-100 text-[#006194] font-black text-xl px-3 py-1 rounded-lg">
                  {ev.year}
                </span>
                <div className="text-slate-300 group-hover:text-sky-500 transition-colors">
                  {ev.icon}
                </div>
              </div>

              <h4 className="font-bold text-slate-800 text-md mb-3 min-h-[48px]">
                {ev.event}
              </h4>
              
              <p className="text-slate-600 text-sm mb-4 flex-grow">
                {ev.desc}
              </p>
              
              <div className="bg-sky-50 rounded-lg p-3 border border-sky-100/50 mt-auto">
                <p className="text-xs text-[#006194] font-medium leading-relaxed">
                  <strong className="block text-sky-800 mb-1">Why it matters:</strong> 
                  {ev.matters}
                </p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-100 text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                SOURCE: {ev.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyThisPS;
