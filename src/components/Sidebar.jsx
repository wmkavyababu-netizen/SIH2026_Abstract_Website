import React, { useState } from 'react';

const Sidebar = ({ currentView, setCurrentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME', icon: 'home' },
    { id: 'why-this-problem-statement', label: 'WHY THIS PROBLEM STATEMENT', icon: 'psychology_alt' },
    { id: 'our-solution', label: 'OUR SOLUTION', icon: 'architecture' },
    { id: 'existing-products-vs-tarang', label: 'EXISTING PRODUCTS VS TARANG', icon: 'compare_arrows' },
    { id: 'what-tarang-detects', label: 'WHAT TARANG DETECTS', icon: 'radar' },
    { id: 'dashboard', label: 'DASHBOARD', icon: 'dashboard' },
    { id: 'affiliations', label: 'AFFILIATIONS', icon: 'handshake' },
    { id: 'references', label: 'REFERENCES', icon: 'menu_book' },
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
      {/* Mobile Top Header with Hamburger */}
      <div className="md:hidden flex items-center justify-between bg-white px-lg py-md border-b border-outline-variant sticky top-0 z-50 shadow-sm w-full select-none">
        <span className="font-headline-sm text-[#006194] font-black text-[22px] tracking-wider">TARANG</span>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="flex items-center gap-xs font-bold text-[14px] text-[#006194] border border-[#006194]/30 px-md py-sm rounded-lg hover:bg-sky-50 transition-colors cursor-pointer min-h-[44px]"
        >
          <span className="material-symbols-outlined text-[20px]">{isOpen ? 'close' : 'menu'}</span>
          <span>MENU</span>
        </button>
      </div>

      {/* Sidebar / Navigation Drawer */}
      <aside className={`
        fixed inset-y-0 left-0 z-[60] w-72 bg-white border-r border-outline-variant flex flex-col transform transition-transform duration-300 ease-in-out select-none
        md:relative md:translate-x-0 md:z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Sidebar Brand header (Desktop only) */}
        <div className="p-lg border-b border-outline-variant hidden md:block">
          <span className="font-display-lg text-[26px] font-black text-[#006194] tracking-widest block mb-xs">TARANG</span>
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest block">Marine Intelligence</span>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 overflow-y-auto py-lg">
          <ul className="space-y-md px-sm">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <li key={item.id}>
                  <button 
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center gap-md px-lg py-md rounded-full text-[14px] font-bold transition-all duration-200 cursor-pointer text-left min-h-[48px] ${
                      isActive 
                        ? 'bg-secondary-container text-on-secondary-container shadow-sm border border-[#006194]/20' 
                        : 'text-slate-700 hover:bg-slate-100 hover:text-[#006194]'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-[20px] ${isActive ? 'text-[#006194]' : 'text-slate-500'}`}>
                      {item.icon}
                    </span>
                    <span className="tracking-wide">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[55] md:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;