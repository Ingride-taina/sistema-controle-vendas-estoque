'use client';

import { useState, useEffect } from 'react';
import { BackgroundContainer } from '@/src/components/layout/BackgroundContainer';
import { HeaderVoltar } from '@/src/components/layout/HeaderVoltar';
import { BotaoAcaoRapida } from '@/src/components/ui/BotaoAcaoRapida';
import { FormProdutoSimples } from '@/src/components/produto/FormProdutoSimples';
import { CardProdutoModerno } from '@/src/components/produto/CardProdutoModerno';
import { produtoService, Produto } from '@/src/service/localStorageService';

export default function CadastroProdutoPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [mostrarForm, setMostrarForm] = useState(false);
  const [produtoEditando, setProdutoEditando] = useState<string | null>(null);

  // Carregar produtos do localStorage ao iniciar
  //useEffect serve para 
  useEffect(() => {
    setProdutos(produtoService.getAll());
  }, []);

  // Adicionar novo produto
  const handleAdicionarProduto = (data: { nome: string; categoria: string; preco: string; quantidade: string }) => {
    const precoNumerico = parseFloat(data.preco.replace(',', '.'));
    const quantidadeNumerica = parseInt(data.quantidade) || 0;
    
    const novoProduto = produtoService.add({
      nome: data.nome,
      categoria: data.categoria,
      preco: isNaN(precoNumerico) ? 0 : precoNumerico,
      quantidade: quantidadeNumerica,
    });
    
    setProdutos(produtoService.getAll());
    setMostrarForm(false);
  };

  // Editar produto
  const handleEditarProduto = (id: string) => {
    const produto = produtos.find(p => p.id === id);
    if (produto) {
      setProdutoEditando(id);
      setMostrarForm(true);
    }
  };

  // Excluir produto
  const handleExcluirProduto = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      produtoService.delete(id);
      setProdutos(produtoService.getAll());
    }
  };

  return (
    <BackgroundContainer>
      <div className="flex-1 pb-8">
        
        <HeaderVoltar titulo="Cadastro de Produtos" showBack={true} />
 
        <div className="px-6 mt-4">
          <BotaoAcaoRapida
            icone={mostrarForm ? '✕' : '+'}
            label={mostrarForm ? 'Fechar' : 'Novo Produto'}
            onClick={() => setMostrarForm(!mostrarForm)}
            cor="petroleo"
            tamanho="md"
          />
        </div>

        {mostrarForm && (
          <div className="px-6 mt-4">
            <FormProdutoSimples
              onSubmit={handleAdicionarProduto}
              onCancel={() => {
                setMostrarForm(false);
                setProdutoEditando(null);
              }}
              initialData={
                produtoEditando 
                  ? produtos.find(p => p.id === produtoEditando)
                  : undefined
              }
            />
          </div>
        )}

        <div className="px-6 mt-6">
          {produtos.length === 0 ? (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-100">
              <div className="text-6xl mb-4">📦</div>
              <p className="text-gray-600 font-medium">
                Nenhum produto cadastrado
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Clique em "Novo Produto" para adicionar
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {produtos.map((produto) => (
                <CardProdutoModerno
                  key={produto.id}
                  id={produto.id}
                  nome={produto.nome}
                  categoria={produto.categoria}
                  preco={produto.preco}
                  quantidade={produto.quantidade}
                  onEdit={handleEditarProduto}
                  onDelete={handleExcluirProduto}
                />
              ))}
            </div>
          )}
        </div>

        <div className="px-6 mt-6">
          <p className="text-sm text-white/70">
            Total: {produtos.length} produto(s) cadastrados
          </p>
        </div>
      </div>
    
    </BackgroundContainer>
  );
}