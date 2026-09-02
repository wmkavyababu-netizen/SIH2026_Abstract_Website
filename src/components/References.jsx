import React from 'react';

const References = () => {
  const referencesList = [
    {
      num: "[01]",
      title: "MoES – Survey on microplastic and marine debris (2022–2025)",
      org: "Press Information Bureau (PIB)",
      year: "2025",
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2152990"
    },
    {
      num: "[02]",
      title: "India needs a marine litter policy as plastic waste chokes corals",
      org: "Mongabay India",
      year: "2025",
      url: "https://india.mongabay.com/2025/09/india-needs-a-marine-litter-policy-as-plastic-waste-chokes-corals/"
    },
    {
      num: "[03]",
      title: "India's Coastline Faces Microplastic Threat Despite Drop in Beach Litter",
      org: "GroundReport",
      year: "2025",
      url: "https://groundreport.in/latest/indias-coastline-microplastic-threat-beach-litter-decline-9634625"
    },
    {
      num: "[04]",
      title: "Monsoon flushes nearly half of marine litter into sea",
      org: "Deccan Herald",
      year: "2026",
      url: "https://www.deccanherald.com/india/maharashtra/monsoon-flushes-nearly-half-of-marine-litter-into-sea-mumbai-beaches-among-worst-hit-fishery-survey-of-india-4030723"
    },
    {
      num: "[05]",
      title: "Increasing risk of invasive species colonization on marine debris (SE coast of India)",
      org: "ScienceDaily",
      year: "2023",
      url: "https://sciencedaily.com/releases/2023/10/231028170657.htm"
    },
    {
      num: "[06]",
      title: "National Institute of Ocean Technology (NIOT) Official Portal",
      org: "NIOT",
      year: "2026",
      url: "https://www.niot.res.in/"
    },
    {
      num: "[07]",
      title: "Ministry of Earth Sciences (MoES) Official Portal",
      org: "MoES",
      year: "2026",
      url: "https://www.moes.gov.in/"
    },
    {
      num: "[08]",
      title: "Smart India Hackathon 2026 Official Portal",
      org: "SIH 2026",
      year: "2026",
      url: "https://smartindia.gov.in/"
    }
  ];

  return (
    <section id="references" className="space-y-md scroll-mt-md text-[13px]">
      {/* Title */}
      <h2 className="section-heading text-[#006194]">
        REFERENCES
      </h2>

      <p className="body-text text-slate-500 mb-lg">
        List of reference surveys, organizational websites, and published studies cited in this platform.
      </p>

      {/* References Listing */}
      <div className="space-y-sm mt-md">
        {referencesList.map((ref, index) => (
          <div 
            key={index}
            className="p-md bg-white border border-[#e0e3e5] rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-md shadow-sm hover:border-[#006194]/25 transition-colors"
          >
            <div className="flex items-start gap-md min-w-0 flex-1">
              <span className="font-bold text-[#006194] text-[12px] pt-[2px]">{ref.num}</span>
              <div className="space-y-xs min-w-0 flex-1">
                <h4 className="body-text font-semibold text-slate-800 leading-snug">{ref.title}</h4>
                <div className="text-[11px] text-slate-500">
                  <span>Author/Org: <strong>{ref.org}</strong></span>
                  <span className="mx-sm">•</span>
                  <span>Year: {ref.year}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-sm pt-sm md:pt-0 self-end md:self-auto text-[10px]">
              <span className="text-slate-400 text-[9px] truncate max-w-[150px] hidden lg:block">{ref.url}</span>
              <a 
                href={ref.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#006194] hover:text-[#004b73] font-bold uppercase tracking-wider inline-flex items-center gap-xs cursor-pointer border border-[#cce5ff] px-sm py-[4px] rounded bg-sky-50/50"
              >
                Open Link
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default References;
