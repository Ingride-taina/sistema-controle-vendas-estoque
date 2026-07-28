'use client';

import { Be_Vietnam_Pro } from "next/font/google";
import { ItemCarrinho } from './ItemCarrinho';
import { BotaoAcaoRapida } from '@/src/components/ui/BotaoAcaoRapida';

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "400",
});

interface ItemCarrinhoType {
  produto: {
    id: string;
    nome: string;
    preco: number;
    categoria: string;
    quantidade: number;
  };
  quantidade: number;
}

interface CarrinhoComprasProps {
  itens: ItemCarrinhoType[];
  total: number;
  onQuantidadeChange: (id: string, novaQuantidade: number) => void;
  onRemover: (id: string) => void;
  onFinalizar: () => void;
  className?: string;
}

export function CarrinhoCompras({
  itens,
  total,
  onQuantidadeChange,
  onRemover,
  onFinalizar,
  className = ''
}: CarrinhoComprasProps) {
  return (
    <div className={` bg-[#2d4c56]/81 backdrop-blur-sm rounded-2xl p-4 shadow-lg ${className}`}>
      <h3 className={`${beVietnam.className} font-bold text-white mb-3 flex items-center gap-2`}>
        🛒 Carrinho
        <span className="text-sm font-normal text-white">
          ({itens.length} itens)
        </span>
      </h3>

      {itens.length === 0 ? (
        <p className="text-gray-400 text-center py-4">
          Nenhum produto no carrinho
        </p>
      ) : (
        <>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {itens.map((item) => (
              <ItemCarrinho
                key={item.produto.id}
                produto={item.produto}
                quantidade={item.quantidade}
                onQuantidadeChange={onQuantidadeChange}
                onRemover={onRemover}
              />
            ))}
          </div>

          <div className=" mt-3 pt-3">
            <div className="flex justify-between items-center">
              <span className="font-bold text-white">Total:</span>
              <span className="text-xl font-bold text-[#2d4c56]">
                R$ {total.toFixed(2)}
              </span>
            </div>
            <BotaoAcaoRapida
              icone=" ✓ "
              label="Finalizar Venda"
              onClick={onFinalizar}
              cor="petroleo"
              tamanho="lg"
              className="w-full mt-3"
            />
          </div>
        </>
      )}
    </div>
  );
}