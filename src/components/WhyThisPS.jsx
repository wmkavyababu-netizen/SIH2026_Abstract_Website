import React from 'react';

const WhyThisPS = () => {
  return (
    <section className="space-y-md">
      <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
        <span className="material-symbols-outlined text-primary">psychology_alt</span>
        Why this PS
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        <div className="glass-card rounded-xl p-lg">
          <h3 className="font-title-lg text-title-lg text-error flex items-center gap-sm mb-md">
            <span className="material-symbols-outlined">warning</span>
            The Traditional Challenge
          </h3>
          <ul className="space-y-md text-on-surface-variant font-body-md">
            <li className="flex gap-sm">
              <span className="material-symbols-outlined text-error">hourglass_empty</span>
              <span><strong>Slow & Manual Interpretation:</strong> Human experts take hours to analyze sonar logs, delaying critical operations.</span>
            </li>
            <li className="flex gap-sm">
              <span className="material-symbols-outlined text-error">crisis_alert</span>
              <span><strong>Error-Prone & Inconsistent:</strong> High false-positive rates due to operator fatigue and complex acoustic shadows.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-primary-container/10 border-2 border-primary rounded-xl p-lg">
          <h3 className="font-title-lg text-title-lg text-primary flex items-center gap-sm mb-md">
            <span className="material-symbols-outlined">bolt</span>
            The Need for Edge AI
          </h3>
          <ul className="space-y-md text-on-surface-variant font-body-md">
            <li className="flex gap-sm">
              <span className="material-symbols-outlined text-primary">memory</span>
              <span><strong>Zero Latency:</strong> Deep sea environments cannot rely on cloud uplinks. Processing must happen on the vehicle.</span>
            </li>
            <li className="flex gap-sm">
              <span className="material-symbols-outlined text-primary">rule</span>
              <span><strong>Precision Geotagging:</strong> Automated detection instantly logs coordinates, reducing human error.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyThisPS;
