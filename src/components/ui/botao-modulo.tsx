'use client';

import { Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "400",
});

interface BotaoModuloProps {
  titulo: string;
  subtitulo: string;
  rota: string;
  icone: string;
  cor?: 'blue' | 'green' | 'orange' | 'purple';
  className?: string;
}

export function BotaoModulo({
  titulo,
  subtitulo,
  rota,
  icone,
  cor = 'blue',
  className = ''
}: BotaoModuloProps) {
  const router = useRouter();

  const cores = {
    blue: {
      border: 'border-blue-400 hover:border-blue-300',
      bg: 'bg-blue-600/30 hover:bg-blue-600/50',
    },
    green: {
      border: 'border-green-400 hover:border-green-300',
      bg: 'bg-green-600/30 hover:bg-green-600/50',
    },
    orange: {
      border: 'border-orange-400 hover:border-orange-300',
      bg: 'bg-orange-600/30 hover:bg-orange-600/50',
    },
    purple: {
      border: 'border-purple-400 hover:border-purple-300',
      bg: 'bg-purple-600/30 hover:bg-purple-600/50',
    },
  };

  const corSelecionada = cores[cor];

  return (
    <button
      onClick={() => router.push(rota)}
      className={`
        w-full backdrop-blur-sm 
        rounded-2xl p-5 
        border-2 ${corSelecionada.border}
        hover:scale-[1.02] 
        transition-all duration-300 
        shadow-lg hover:shadow-xl
        flex items-center gap-4
        group
        ${className}
      `}
    >
      <div className={`
        w-14 h-14 rounded-xl 
        ${corSelecionada.bg}
        backdrop-blur-sm 
        flex items-center justify-center 
        transition-colors
        group-hover:scale-105
      `}>
        <Image
          src={icone}
          alt={titulo}
          width={32}
          height={32}
          className="w-8 h-8 object-contain brightness-0 invert"
        />
      </div>
      
      <div className="flex-1 text-left">
        <h3 className={`${beVietnam.className} font-bold text-lg text-white`}>
          {titulo}
        </h3>
        <p className="text-sm text-white/70">{subtitulo}</p>
      </div>
      
      <div className="text-white/40 group-hover:text-white/70 transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}