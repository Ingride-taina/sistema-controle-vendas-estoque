'use client';

import { Be_Vietnam_Pro } from "next/font/google";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "400",
});

interface BotaoAcaoRapidaProps {
  icone: string;
  label: string;
  onClick?: () => void;
  cor?: 'blue' | 'green' | 'orange' | 'red' | 'petroleo';
  tamanho?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function BotaoAcaoRapida({
  icone,
  label,
  onClick,
  cor = 'blue',
  tamanho = 'md',
  className = ''
}: BotaoAcaoRapidaProps) {
  // Cores baseadas na sua paleta
  const cores = {
    blue: {
      bg: 'bg-[#2563EB]',
      hover: 'hover:bg-[#1D4ED8]',
      shadow: 'shadow-[#2563EB]/30',
      text: 'text-white'
    },
    green: {
      bg: 'bg-[#10B981]',
      hover: 'hover:bg-[#059669]',
      shadow: 'shadow-[#10B981]/30',
      text: 'text-white'
    },
    orange: {
      bg: 'bg-[#F59E0B]',
      hover: 'hover:bg-[#D97706]',
      shadow: 'shadow-[#F59E0B]/30',
      text: 'text-white'
    },
    red: {
      bg: 'bg-[#EF4444]',
      hover: 'hover:bg-[#DC2626]',
      shadow: 'shadow-[#EF4444]/30',
      text: 'text-white'
    },
    petroleo: {
      bg: 'bg-[#0F766E]',
      hover: 'hover:bg-[#115E59]',
      shadow: 'shadow-[#0F766E]/30',
      text: 'text-white'
    }
  };

  // Tamanhos
  const tamanhos = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const corSelecionada = cores[cor];

  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 rounded-xl
        transition-all duration-200 ease-in-out
        hover:scale-[1.03] hover:shadow-lg
        active:scale-[0.97]
        ${corSelecionada.bg}
        ${corSelecionada.hover}
        ${corSelecionada.shadow}
        ${corSelecionada.text}
        ${tamanhos[tamanho]}
        ${beVietnam.className}
        font-medium
        ${className}
      `}
    >
      <span className="text-xl">{icone}</span>
      {label}
    </button>
  );
}