'use client';

import { Bakbak_One, Be_Vietnam_Pro } from "next/font/google";
import { useRouter } from "next/navigation";



const bakbak = Bakbak_One({
  subsets: ["latin"],
  weight: "400",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "400",
});

interface HeaderVoltarProps {
  titulo: string;
  subtitulo?: string;
  showBack?: boolean;
  className?: string;
}

export function HeaderVoltar({ 
  titulo, 
  subtitulo, 
  showBack = true,
  className = '' 
}: HeaderVoltarProps) {
  const router = useRouter();

  return (
    <div className={`px-6 pt-10 ${className}`}>
      {showBack && (
        <button
          onClick={() => router.back()}
          className="text-white/80 hover:text-white transition-colors mb-4 flex items-center gap-2"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
          <span className={`${beVietnam.className} text-sm font-medium`}>
            Voltar
          </span>
        </button>
      )}
      
      <h1 className={`${bakbak.className} text-white text-2xl md:text-3xl`}>
        {titulo}
      </h1>
      
      {subtitulo && (
        <h2 className={`${beVietnam.className} text-white/90 mt-1 font-medium text-base`}>
          {subtitulo}
        </h2>
      )}
    </div>
  );
}