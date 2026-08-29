import React from 'react';

const WhatTarangDetects = () => {
  const debrisClasses = [
    {
      title: "Fishing Gear",
      icon: "catching_fish",
      items: ["Ghost nets", "Trawl nets", "Ropes", "Lines", "Traps", "Cages"],
      colorClass: "text-primary bg-primary/5 border-primary/20"
    },
    {
      title: "Large Debris Objects",
      icon: "inventory_2",
      items: ["Barrels / drums", "Tires", "Containers", "Crates", "Metal sheets", "Pipelines", "Cables"],
      colorClass: "text-[#ac6200] bg-[#ac6200]/5 border-[#ac6200]/20"
    },
    {
      title: "Wrecks and Vessels",
      icon: "sailing",
      items: ["Small boat wrecks", "Sunken craft", "Broken hull fragments"],
      colorClass: "text-[#3f465c] bg-[#3f465c]/5 border-[#3f465c]/20"
    },
    {
      title: "Dumped Anthropogenic Objects",
      icon: "delete_sweep",
      items: ["Machinery", "Construction debris", "Plastic bundles", "Pallets", "Unknown man-made anomalies"],
      colorClass: "text-error bg-error/5 border-error/20"
    }
  ];

  return (
    <section id="what-tarang-detects" className="space-y-md scroll-mt-md">
      <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
        <span className="material-symbols-outlined text-primary">radar</span>
        What Tarang Detects
      </h2>

      <p className="font-body-lg text-on-surface-variant max-w-3xl">
        Tarang is trained to distinguish anthropogenic debris from natural seabed features in side-scan sonar imagery.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        {debrisClasses.map((debris, index) => (
          <div key={index} className={`glass-card rounded-xl p-lg border-2 flex flex-col gap-md transition-all duration-200 hover:scale-[1.01] ${debris.colorClass.split(' ').slice(1).join(' ')}`}>
            <div className="flex items-center gap-md">
              <span className={`material-symbols-outlined text-display-lg rounded-full p-sm bg-white border border-outline-variant ${debris.colorClass.split(' ')[0]}`}>
                {debris.icon}
              </span>
              <h3 className="font-title-lg text-title-lg text-on-surface">{debris.title}</h3>
            </div>
            
            <ul className="grid grid-cols-2 gap-sm text-body-md text-on-surface-variant">
              {debris.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-surface-container-low border border-outline-variant rounded-xl p-md text-center font-body-md text-on-surface-variant">
        <span className="font-semibold text-primary">Reporting Layer:</span> Tarang outputs each detection with class label, bounding box/mask, dimensions, confidence score, depth and geo-location, ready for review and cleanup planning.
      </div>
    </section>
  );
};

export default WhatTarangDetects;
