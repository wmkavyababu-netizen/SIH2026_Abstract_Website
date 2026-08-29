import React from 'react';

const References = () => {
  const referencesList = [
    {
      id: 1,
      title: "MoES – Survey on microplastic and marine debris (2022–2025)",
      source: "Press Information Bureau (PIB)",
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2152990"
    },
    {
      id: 2,
      title: "India needs a marine litter policy as plastic waste chokes corals",
      source: "Mongabay India (2025)",
      url: "https://india.mongabay.com/2025/09/india-needs-a-marine-litter-policy-as-plastic-waste-chokes-corals/"
    },
    {
      id: 3,
      title: "India's Coastline Faces Microplastic Threat Despite Drop in Beach Litter",
      source: "GroundReport (2025)",
      url: "https://groundreport.in/latest/indias-coastline-microplastic-threat-beach-litter-decline-9634625"
    },
    {
      id: 4,
      title: "Monsoon flushes nearly half of marine litter into sea",
      source: "Deccan Herald (2026)",
      url: "https://www.deccanherald.com/india/maharashtra/monsoon-flushes-nearly-half-of-marine-litter-into-sea-mumbai-beaches-among-worst-hit-fishery-survey-of-india-4030723"
    },
    {
      id: 5,
      title: "Increasing risk of invasive species colonization on marine debris (SE coast of India)",
      source: "ScienceDaily (2023)",
      url: "https://sciencedaily.com/releases/2023/10/231028170657.htm"
    },
    {
      id: 6,
      title: "National Institute of Ocean Technology (NIOT) Official Portal",
      source: "NIOT",
      url: "https://www.niot.res.in/"
    },
    {
      id: 7,
      title: "Ministry of Earth Sciences (MoES) Official Portal",
      source: "MoES",
      url: "https://www.moes.gov.in/"
    },
    {
      id: 8,
      title: "Smart India Hackathon 2026 Official Portal",
      source: "SIH 2026",
      url: "https://smartindia.gov.in/"
    }
  ];

  return (
    <section id="references" className="space-y-md scroll-mt-md">
      <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
        <span className="material-symbols-outlined text-primary">menu_book</span>
        References & Further Reading
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        {referencesList.map((ref) => (
          <a
            key={ref.id}
            href={ref.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl p-md border border-outline-variant hover:border-primary flex items-start gap-md hover:shadow-sm hover:scale-[1.005] transition-all duration-200 cursor-pointer"
          >
            <span className="material-symbols-outlined text-primary text-display-lg bg-primary/5 rounded p-xs mt-xs">
              link
            </span>
            <div className="flex-1 min-w-0">
              <span className="font-label-md text-primary block mb-xs">
                {ref.source}
              </span>
              <h4 className="font-title-lg text-on-surface leading-snug line-clamp-2">
                {ref.title}
              </h4>
              <span className="text-code-sm text-on-surface-variant break-all block mt-xs flex items-center gap-xs font-mono">
                {ref.url.substring(0, 60)}...
              </span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant text-sm self-center">
              open_in_new
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default References;
