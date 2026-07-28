'use client';

import { Be_Vietnam_Pro } from "next/font/google";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "400",
});

interface CategoriaTabsProps {
  categorias: string[];
  categoriaAtiva: string;
  onCategoriaChange: (categoria: string) => void;
  className?: string;
}

export function CategoriaTabs({
  categorias,
  categoriaAtiva,
  onCategoriaChange,
  className = ''
}: CategoriaTabsProps) {
  return (
    <div className={`flex gap-2 overflow-x-auto pb-2 scrollbar-hide ${className}`}>
      {categorias.map((categoria) => (
        <button
          key={categoria}
          onClick={() => onCategoriaChange(categoria)}
          className={`
            px-4 py-2 rounded-xl whitespace-nowrap
            transition-all duration-200 ease-in-out
            ${beVietnam.className} text-sm font-medium
            ${categoria === categoriaAtiva
              ? 'bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/30' // Usando sua cor primária
              : 'bg-white/80 backdrop-blur-sm text-[#475569] hover:bg-white/90' // Usando text-secondary
            }
            hover:scale-[1.02] active:scale-[0.98]
          `}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}