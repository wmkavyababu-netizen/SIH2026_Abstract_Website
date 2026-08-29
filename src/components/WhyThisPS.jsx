import React from 'react';

const WhyThisPS = () => {
  return (
    <section id="why-this-problem-statement" className="space-y-md scroll-mt-md">
      <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
        <span className="material-symbols-outlined text-primary">psychology_alt</span>
        Why This Problem Statement?
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
        {/* The Traditional Challenge */}
        <div className="glass-card rounded-xl p-lg flex flex-col justify-between">
          <div>
            <h3 className="font-title-lg text-title-lg text-error flex items-center gap-sm mb-md">
              <span className="material-symbols-outlined">warning</span>
              The Subsea Debris Threat & Operational Gaps
            </h3>
            <div className="space-y-md text-on-surface-variant font-body-md text-justify">
              <p>
                Marine debris on the seabed—ghost nets, fishing gear, barrels, wrecks and dumped objects—poses a silent but growing threat to India's blue economy. It damages habitats, entangles marine life, interferes with fisheries, aquaculture, pipelines and offshore infrastructure, and increases navigation hazards.
              </p>
              <p>
                Despite large coastal cleanup campaigns like <strong>Swachh Sagar, Surakshit Sagar</strong>, there is no unified, operational system to systematically detect, map and prioritize subsea debris across Indian waters. Surveys remain fragmented, interpretation is manual, and cleanup decisions are often reactive.
              </p>
            </div>
          </div>
        </div>
        
        {/* The Need for Edge AI */}
        <div className="bg-primary-container/10 border-2 border-primary rounded-xl p-lg flex flex-col justify-between">
          <div>
            <h3 className="font-title-lg text-title-lg text-primary flex items-center gap-sm mb-md">
              <span className="material-symbols-outlined">bolt</span>
              Critical Incidents & The AI Solution
            </h3>
            <div className="space-y-md text-on-surface-variant font-body-md text-justify">
              <p>
                Globally, missing objects like the IAF AN-32 aircraft debris were found only by chance during unrelated AUV missions, highlighting the lack of systematic AI tools to flag anthropogenic anomalies on the seabed. Recent MoES surveys also show that abandoned fishing gear and plastic debris are major sources of microplastics in water and benthic regions, yet their precise locations remain poorly mapped.
              </p>
              <p className="border-l-4 border-primary pl-sm bg-primary/5 py-xs font-semibold text-primary">
                Tarang directly addresses this gap by turning scattered sonar data into a national seabed debris intelligence layer, enabling targeted, data-driven cleanup and risk reduction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisPS;
