/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useState, useEffect } from 'react';
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "400",
});

interface FormProdutoSimplesProps {
  onSubmit: (data: { nome: string; categoria: string; preco: string; quantidade: string }) => void;
  onCancel?: () => void;
  initialData?: {
    id?: string;
    nome: string;
    categoria: string;
    preco: number;
    quantidade: number;
  };
  className?: string;
}

export function FormProdutoSimples({
  onSubmit,
  onCancel,
  initialData,
  className = ''
}: FormProdutoSimplesProps) {
  const [formData, setFormData] = useState({
    nome: '',
    categoria: '',
    preco: '0,00',
    quantidade: '0'
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        nome: initialData.nome,
        categoria: initialData.categoria,
        preco: initialData.preco.toFixed(2).replace('.', ','),
        quantidade: String(initialData.quantidade)
      });
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    if (!initialData) {
      setFormData({ nome: '', categoria: '', preco: '0,00', quantidade: '0' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isEditing = !!initialData;

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`
        bg-white/90 backdrop-blur-sm 
        rounded-2xl p-6 shadow-lg 
        border border-gray-100
        ${className}
      `}
    >
      <h3 className={`${beVietnam.className} font-bold text-gray-800 text-lg mb-4 flex items-center gap-2`}>
        <span>{isEditing ? '✏️' : '➕'}</span>
        {isEditing ? 'Editar Produto' : 'Adicionar Produto'}
      </h3>

      <div className="space-y-4">
      
        <div>
          <label className={`${beVietnam.className} text-sm font-medium text-gray-700 block mb-1`}>
            Nome do produto
          </label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Ex: Café Especial"
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 outline-none transition-all text-gray-900"
            required
          />
        </div>

       
        <div>
          <label className={`${beVietnam.className} text-sm font-medium text-gray-700 block mb-1`}>
            Categoria
          </label>
          <input
            type="text"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            placeholder="Ex: Grãos, Enlatados, Higiene..."
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 outline-none transition-all text-gray-900"
            required
          />
        </div>

       
        <div>
          <label className={`${beVietnam.className} text-sm font-medium text-gray-700 block mb-1`}>
            Preço
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R$</span>
            <input
              type="text"
              name="preco"
              value={formData.preco}
              onChange={handleChange}
              placeholder="0,00"
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 outline-none transition-all text-gray-900"
            />
          </div>
        </div>

        <div>
          <label className={`${beVietnam.className} text-sm font-medium text-gray-700 block mb-1`}>
            Quantidade em Estoque
          </label>
          <input
            type="number"
            name="quantidade"
            value={formData.quantidade}
            onChange={handleChange}
            placeholder="0"
            min="0"
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 outline-none transition-all text-gray-900"
            required
          />
        </div>

  
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 py-2.5 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors font-medium shadow-lg shadow-[#10B981]/30"
          >
            {isEditing ? 'Atualizar' : 'Cadastrar'}
          </button>
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
            >
              Cancelar
            </button>
          )}
        </div>
      </div>
    </form>
  );
}