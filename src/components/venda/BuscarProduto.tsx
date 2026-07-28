'use client';

import { Be_Vietnam_Pro } from "next/font/google";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "400",
});

interface BuscarProdutoProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function BuscarProduto({
  value,
  onChange,
  placeholder = " Buscar produto...",
  className = ''
}: BuscarProdutoProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`
        w-full px-4 py-3 rounded-xl 
        focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 
        outline-none transition-all 
        text-white  bg-[#2d4c56]/81 backdrop-blur-sm
        ${beVietnam.className}
        ${className}
      `}
    />
  );
}