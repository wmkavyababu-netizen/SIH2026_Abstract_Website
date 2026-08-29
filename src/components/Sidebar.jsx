import React, { useState } from 'react';

const Sidebar = ({ currentView, setCurrentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'why-this-problem-statement', label: 'Why This Problem Statement', icon: 'psychology_alt' },
    { id: 'our-solution', label: 'Our Solution', icon: 'architecture' },
    { id: 'existing-products-vs-tarang', label: 'Existing Products vs Tarang', icon: 'compare_arrows' },
    { id: 'what-tarang-detects', label: 'What Tarang Detects', icon: 'radar' },
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'affiliations', label: 'Affiliations', icon: 'handshake' },
    { id: 'references', label: 'References', icon: 'menu_book' },
  ];

  const handleNavClick = (id) => {
    setCurrentView(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between bg-surface p-sm border-b border-outline-variant sticky top-0 z-50">
        <span className="font-headline-sm text-primary font-bold">TARANG</span>
        <button onClick={() => setIsOpen(!isOpen)} className="material-symbols-outlined p-sm hover:bg-surface-container-low rounded">
          menu
        </button>
      </div>

      {/* Sidebar Drawer */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-surface border-r border-outline-variant flex flex-col transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-lg border-b border-outline-variant hidden md:block">
          <span className="font-headline-sm text-primary font-bold block mb-xs">TARANG</span>
          <span className="text-label-md text-on-surface-variant block">Marine Intelligence Platform</span>
        </div>

        <nav className="flex-1 overflow-y-auto py-md">
          <ul className="space-y-sm px-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-md px-md py-sm rounded-full font-label-md transition-colors cursor-pointer text-left ${
                    currentView === item.id 
                      ? 'bg-secondary-container text-on-secondary-container' 
                      : 'text-on-surface hover:bg-surface-container-low'
                  }`}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-lg px-md">
            <div className="text-label-md text-on-surface-variant mb-sm px-sm">AFFILIATIONS</div>
            <div className="flex flex-col gap-sm px-sm">
              <span className="bg-surface-container-high px-sm py-xs rounded font-label-md text-on-surface inline-block w-max">Ministry of Earth Sciences</span>
              <span className="bg-surface-container-high px-sm py-xs rounded font-label-md text-on-surface inline-block w-max">NIOT</span>
              <span className="bg-primary text-on-primary px-sm py-xs rounded font-label-md inline-block w-max">SIH 2026</span>
            </div>
          </div>
        </nav>

        <div className="p-md border-t border-outline-variant">
          <div className="flex items-center gap-md px-sm py-xs">
            <div className="w-10 h-10 rounded-full border border-outline bg-surface-container-high flex items-center justify-center text-on-surface-variant">
              <span className="material-symbols-outlined">person</span>
            </div>
            <div className="flex flex-col">
              <span className="font-title-lg text-[14px]">Operator 01</span>
              <span className="font-body-md text-[12px] text-on-surface-variant">NIOT Command</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
