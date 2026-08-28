import React from 'react';

const ExistingVsOur = () => {
  return (
    <section className="space-y-md">
      <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
        <span className="material-symbols-outlined text-primary">compare_arrows</span>
        Existing Product vs Our Product
      </h2>
      
      <div className="glass-card rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant">
              <th className="p-md font-title-lg text-on-surface w-1/3">Capability</th>
              <th className="p-md font-title-lg text-on-surface w-1/3">Traditional Software</th>
              <th className="p-md font-title-lg text-on-primary bg-primary w-1/3">TARANG AI Platform</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            <tr className="hover:bg-surface/50 transition-colors">
              <td className="p-md font-label-md text-on-surface">Processing Speed</td>
              <td className="p-md font-body-md text-on-surface-variant">Days to Weeks</td>
              <td className="p-md font-body-md text-primary font-semibold flex items-center gap-xs">
                <span className="material-symbols-outlined text-sm">check_circle</span> Real-Time (ms)
              </td>
            </tr>
            <tr className="hover:bg-surface/50 transition-colors">
              <td className="p-md font-label-md text-on-surface">Detection Method</td>
              <td className="p-md font-body-md text-on-surface-variant">Human Visual Inspection</td>
              <td className="p-md font-body-md text-primary font-semibold flex items-center gap-xs">
                <span className="material-symbols-outlined text-sm">check_circle</span> YOLOv8 + U-Net
              </td>
            </tr>
            <tr className="hover:bg-surface/50 transition-colors">
              <td className="p-md font-label-md text-on-surface">Edge Readiness</td>
              <td className="p-md font-body-md text-error flex items-center gap-xs">
                <span className="material-symbols-outlined text-sm">cancel</span> Requires Uplink
              </td>
              <td className="p-md font-body-md text-primary font-semibold flex items-center gap-xs">
                <span className="material-symbols-outlined text-sm">check_circle</span> 100% Edge Native
              </td>
            </tr>
            <tr className="hover:bg-surface/50 transition-colors">
              <td className="p-md font-label-md text-on-surface">Coordinate Logging</td>
              <td className="p-md font-body-md text-on-surface-variant">Manual Estimation</td>
              <td className="p-md font-body-md text-primary font-semibold flex items-center gap-xs">
                <span className="material-symbols-outlined text-sm">check_circle</span> Automated (GPS/USBL)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ExistingVsOur;
