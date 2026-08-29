import React from 'react';

const Affiliations = () => {
  const affiliateList = [
    {
      name: "Ministry of Earth Sciences (MoES)",
      url: "https://www.moes.gov.in/",
      icon: "account_balance",
      description: "Overseeing ocean observation, marine litter studies and the Deep Ocean Mission.",
      linkText: "Ministry of Earth Sciences"
    },
    {
      name: "National Institute of Ocean Technology (NIOT)",
      url: "https://www.niot.res.in/",
      icon: "precision_manufacturing",
      description: "Developing indigenous underwater robotics, AUVs/ROVs and seabed technologies.",
      linkText: "NIOT"
    },
    {
      name: "Smart India Hackathon 2026 (SIH 2026)",
      url: "https://smartindia.gov.in/",
      icon: "military_tech",
      description: "Problem statement provided by MoES and NIOT under SIH 2026.",
      linkText: "SIH 2026"
    }
  ];

  return (
    <section id="affiliations" className="space-y-md scroll-mt-md">
      <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
        <span className="material-symbols-outlined text-primary">handshake</span>
        Affiliations & Alignment
      </h2>

      <p className="font-body-lg text-on-surface-variant max-w-3xl">
        Tarang is designed to align with and support initiatives under:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {affiliateList.map((aff, index) => (
          <div key={index} className="glass-card rounded-xl p-md border border-outline-variant flex flex-col justify-between hover:shadow-sm transition-shadow duration-200">
            <div className="space-y-sm">
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-display-lg text-primary">
                  {aff.icon}
                </span>
                <h4 className="font-title-lg text-on-surface">{aff.name}</h4>
              </div>
              <p className="text-body-md text-on-surface-variant">
                {aff.description}
              </p>
            </div>
            <div className="pt-md border-t border-outline-variant/30 mt-md">
              <a 
                href={aff.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:text-primary-container hover:underline font-semibold text-body-md transition-all duration-200 inline-flex items-center gap-xs cursor-pointer"
              >
                Visit {aff.linkText}
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary-container/5 border border-primary/20 rounded-xl p-md font-body-md text-on-surface-variant">
        <span className="font-semibold text-primary">Mission Alignment:</span> Tarang supports MoES/NIOT missions such as O-SMART, Deep Ocean Mission (Samudrayaan) and Swachh Sagar, Surakshit Sagar, contributing to a future national marine debris atlas and data-driven ocean governance.
      </div>
    </section>
  );
};

export default Affiliations;
