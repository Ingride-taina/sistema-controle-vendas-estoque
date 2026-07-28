'use client';

import { Produto } from '@/src/service/localStorageService';

interface ItemCarrinhoProps {
  produto: Produto;
  quantidade: number;
  onQuantidadeChange: (id: string, novaQuantidade: number) => void;
  onRemover: (id: string) => void;
  className?: string;
}

export function ItemCarrinho({
  produto,
  quantidade,
  onQuantidadeChange,
  onRemover,
  className = ''
}: ItemCarrinhoProps) {
  return (
    <div className={`flex items-center justify-between bg-gray-50 rounded-xl p-3 ${className}`}>
      <div className="flex-1">
        <div className="font-medium text-gray-800 text-sm">
          {produto.nome}
        </div>
        <div className="text-xs text-gray-500">
          R$ {produto.preco.toFixed(2)}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onQuantidadeChange(produto.id, quantidade - 1)}
          className="w-7 h-7 rounded-full bg-[#2d4c56]/81 hover:bg-gray-300 transition-colors flex items-center justify-center"
        >
          -
        </button>
        <span className="w-8 text-center font-medium text-gray-700">
          {quantidade}
        </span>
        <button
          onClick={() => onQuantidadeChange(produto.id, quantidade + 1)}
          className="w-7 h-7 rounded-full bg-[#2d4c56]/81 hover:bg-gray-300 transition-colors flex items-center justify-center"
        >
          +
        </button>
        <button
          onClick={() => onRemover(produto.id)}
          className="ml-1 text-red-500 hover:text-red-700 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
}