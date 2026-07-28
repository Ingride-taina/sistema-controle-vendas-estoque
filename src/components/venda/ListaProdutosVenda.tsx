'use client';

import { Be_Vietnam_Pro } from "next/font/google";
import { Produto } from '@/src/service/localStorageService';

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "400",
});

interface ListaProdutosVendaProps {
  produtos: Produto[];
  onAdicionar: (produto: Produto) => void;
  className?: string;
}

export function ListaProdutosVenda({
  produtos,
  onAdicionar,
  className = ''
}: ListaProdutosVendaProps) {
  return (
    <div className={className}>
      <h3 className={`${beVietnam.className} text-white font-semibold mb-3`}>
        Produtos Disponíveis
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {produtos.map((produto) => (
          <button
            key={produto.id}
            onClick={() => onAdicionar(produto)}
            className={`
              bg-[#2d4c56]/81 backdrop-blur-sm rounded-xl p-3 text-left
              hover:scale-[1.02] transition-all duration-200
              ${produto.quantidade > 0 ? 'hover:shadow-lg' : 'opacity-50 cursor-not-allowed'}
            `}
            disabled={produto.quantidade <= 0}
          >
            <div className="font-semibold text-white text-sm truncate">
              {produto.nome}
            </div>
            <div className="text-xs text-amber-50">{produto.categoria}</div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-green-200 font-bold text-sm">
                R$ {produto.preco.toFixed(2)}
              </span>
              <span className="text-xs text-gray-400">
                📦 {produto.quantidade}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}