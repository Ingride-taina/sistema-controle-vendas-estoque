// components/BottomNav.tsx
import React from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

function BotoesNavegacao() {
  const navItems: NavItem[] = [
    { id: 'modulos', label: 'Módulos', icon: '/modulos-icon.png' },
    { id: 'metricas', label: 'Métricas', icon: '/metricas-icon.png' },
    { id: 'perfil', label: 'Perfil', icon: '/perfil-icon.png' },
  ];

  return (
    <div className="pb-10 px-6 md:max-w-md md:mx-auto md:w-full">
      <nav className="bg-[#2d4c56]/81 backdrop-blur-lg rounded-full px-8 py-4 flex justify-between items-center shadow-2xl border border-white/10">
        
        {navItems.map((item) => (
          <div 
            key={item.id} 
            className="flex flex-col items-center cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
          >
            <img src={item.icon} alt={item.label} className="w-6 h-6 mb-1" />
            <span className="text-white text-[10px] font-bold tracking-tighter">
              {item.label}
            </span>
          </div>
        ))}

      </nav>
    </div>
  );
}

export default BotoesNavegacao;