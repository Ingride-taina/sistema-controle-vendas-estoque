'use client';

import { Be_Vietnam_Pro } from "next/font/google";
import { Venda } from '@/src/service/localStorageService';

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "400",
});

interface HistoricoVendasProps {
  vendas: Venda[];
  className?: string;
}

export function HistoricoVendas({
  vendas,
  className = ''
}: HistoricoVendasProps) {
  return (
    <div className={`bg-[#2d4c56]/81 backdrop-blur-sm rounded-2xl p-4 shadow-lg ${className}`}>
      <h3 className={`${beVietnam.className} font-bold text-white mb-3`}>
        Histórico de Vendas
      </h3>

      {vendas.length === 0 ? (
        <p className="text-gray-400 text-center py-4">
          Nenhuma venda realizada ainda
        </p>
      ) : (
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {vendas.map((venda) => (
            <div
              key={venda.id}
              className="bg-gray-50 rounded-xl p-3"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-sm text-gray-600">
                    {venda.data}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {venda.produtos.map(p => p.nome).join(', ')}
                  </div>
                </div>
                <span className="font-bold text-[#2d4c56]">
                  R$ {venda.total.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}