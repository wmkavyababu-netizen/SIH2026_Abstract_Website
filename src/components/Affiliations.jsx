import React from 'react';

const Affiliations = () => {
  const stakeholders = [
    {
      role: "MARINE CONSERVATION NGOS",
      emoji: "🌊",
      desc: "Cleans benthic reefs by accessing precise debris coordinates."
    },
    {
      role: "COASTAL SURVEYORS",
      emoji: "🛰️",
      desc: "Automates sonar returns mapping and target profiles logging."
    },
    {
      role: "PORT & COASTAL AUTHORITIES",
      emoji: "⚓",
      desc: "Surveys shipping channels to clear blockages and obstacles."
    },
    {
      role: "FISHING COMMUNITIES",
      emoji: "🐟",
      desc: "Reclaiming lost gear and protecting local breeding grounds."
    },
    {
      role: "AUV & RESEARCH TEAMS",
      emoji: "🤖",
      desc: "Runs edge models to classify objects during search sweeps."
    }
  ];

  const affiliateList = [
    {
      name: "MINISTRY OF EARTH SCIENCES (MoES)",
      url: "https://www.moes.gov.in/",
      icon: "account_balance",
      description: "Directs national ocean observation networks, marine litter surveys, and the Deep Ocean Mission framework.",
      linkText: "Ministry of Earth Sciences Portal"
    },
    {
      name: "NATIONAL INSTITUTE OF OCEAN TECHNOLOGY (NIOT)",
      url: "https://www.niot.res.in/",
      icon: "precision_manufacturing",
      description: "Develops indigenous subsea systems, acoustic transducers, AUV/ROV platforms, and ocean data servers.",
      linkText: "NIOT Res Center Portal"
    },
    {
      name: "SMART INDIA HACKATHON (SIH 2026)",
      url: "https://smartindia.gov.in/",
      icon: "military_tech",
      description: "SIH provides the platform to bridge national research questions with young developer solutions.",
      linkText: "Smart India Hackathon Portal"
    }
  ];

  return (
    <section id="affiliations" className="space-y-xl scroll-mt-md text-[13px]">
      
      {/* 1. Connected Stakeholder Ecosystem */}
      <div className="glass-card rounded-xl p-lg bg-white border border-outline-variant shadow-sm space-y-md">
        <h3 className="sub-heading text-[#006194] font-bold">
          TARANG ECOSYSTEM SYSTEM ARCHITECTURE
        </h3>
        
        <p className="body-text text-slate-500">
          This system connects multi-agency data collections to real-world subsea operations.
        </p>

        {/* Visual ecosystem flow diagram (DATA -> INTELLIGENCE -> DECISION -> ACTION) */}
        {/* Visual ecosystem flow diagram */}
        <div className="bg-sky-50 border border-[#cce5ff] rounded-xl p-md flex justify-between items-center max-w-lg mx-auto gap-xs text-[10px] text-center font-bold text-[#006194] uppercase tracking-wider mb-lg">
          <span>DATA</span>
          <span>→</span>
          <span>INTELLIGENCE</span>
          <span>→</span>
          <span>DECISION</span>
          <span>→</span>
          <span>ACTION</span>
        </div>

        {/* Stakeholder boxes connected to TARANG */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-sm pt-xs">
          {stakeholders.map((st, index) => (
            <div key={index} className="border border-outline-variant p-md rounded-xl bg-slate-50 space-y-xs flex flex-col items-center text-center">
              <span className="text-[24px] mb-xs">{st.emoji}</span>
              <h4 className="font-bold text-[#006194] text-[11px] uppercase tracking-wider leading-tight">{st.role}</h4>
              <p className="body-text text-slate-500 text-[12px] leading-relaxed mt-sm">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-t border-outline-variant/30 w-full" />

      {/* 2. Spacious Affiliations Link Cards */}
      <div className="space-y-md">
        <h2 className="section-heading">
          AFFILIATIONS & ALIGNMENTS
        </h2>
        <p className="body-text text-slate-500 mb-lg">
          Aligned with research objectives defined by national ocean science programs and ministry guidelines.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {affiliateList.map((aff, index) => (
            <div key={index} className="glass-card rounded-xl p-lg border border-outline-variant/60 bg-white shadow-sm flex flex-col justify-between min-h-[220px]">
              <div className="space-y-sm">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-display-lg text-[#006194]">
                    {aff.icon}
                  </span>
                  <h4 className="font-bold text-on-surface text-[12px] uppercase tracking-wider leading-snug">{aff.name}</h4>
                </div>
                <p className="body-text text-slate-500 text-[12px] leading-relaxed">
                  {aff.description}
                </p>
              </div>
              
              <div className="pt-md border-t border-[#e0e3e5] mt-md">
                <a 
                  href={aff.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#006194] hover:text-[#004b73] font-bold text-[11px] uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-xs cursor-pointer"
                >
                  Visit Portal
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
