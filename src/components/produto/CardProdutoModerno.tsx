'use client';

import { Be_Vietnam_Pro } from "next/font/google";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "400",
});

interface CardProdutoModernoProps {
  id: string;
  nome: string;
  categoria: string;
  preco: number;
  quantidade: number; // NOVO
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  className?: string;
}

export function CardProdutoModerno({
  id,
  nome,
  categoria,
  preco,
  quantidade,
  onEdit,
  onDelete,
  className = ''
}: CardProdutoModernoProps) {
  return (
    <div className={`
      bg-[#2d4c56]/81 backdrop-blur-sm rounded-2xl p-4 shadow-md
      hover:shadow-lg transition-all duration-300 hover:scale-[1.02]
      ${className}
    `}>
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h4 className={`${beVietnam.className} font-semibold text-white`}>
            {nome}
          </h4>
          <p className="text-sm text-white mt-0.5">{categoria}</p>
        </div>
        <span className="text-lg font-bold text-green-100 bg-[#2d4c56]/40 px-3 py-1 rounded-xl">
          R$ {preco.toFixed(2)}
        </span>
      </div>

      
      <div className="mt-2 flex items-center gap-2">
        <span className="text-sm text-white">📦 Estoque:</span>
        <span className={`
          text-sm font-semibold px-2 py-0.5 rounded-full
          ${quantidade > 0 ? 'bg-blue-100 text-[#2d4c56]' : 'bg-red-100 text-red-700'}
        `}>
          {quantidade} unidades
        </span>
      </div>

      <div className="flex gap-2 mt-3">
        {onEdit && (
          <button
            onClick={() => onEdit(id)}
            className="flex-1 py-1.5 bg-blue-50 text-[#2d4c56] rounded-xl hover:bg-blue-100 transition-colors text-sm font-medium"
          >
            Editar
          </button>
        )}
        {onDelete && (
          <button
            onClick={() => onDelete(id)}
            className="flex-1 py-1.5 bg-red-50 text-[#2d4c56] rounded-xl hover:bg-red-100 transition-colors text-sm font-medium"
          >
            Excluir
          </button>
        )}
      </div>
    </div>
  );
}