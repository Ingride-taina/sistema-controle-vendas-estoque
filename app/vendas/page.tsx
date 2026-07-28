'use client';

import { useState, useEffect } from 'react';
import { BackgroundContainer } from '@/src/components/layout/BackgroundContainer';
import { HeaderVoltar } from '@/src/components/layout/HeaderVoltar';
import { BotaoAcaoRapida } from '@/src/components/ui/BotaoAcaoRapida';
import { BuscarProduto } from '@/src/components/venda/BuscarProduto';
import { ListaProdutosVenda } from '@/src/components/venda/ListaProdutosVenda';
import { CarrinhoCompras } from '@/src/components/venda/CarrinhoCompras';
import { HistoricoVendas } from '@/src/components/venda/HistoricoVendas';
import { produtoService, vendaService, Produto } from '@/src/service/localStorageService';

interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}

export default function VendasPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);
  const [busca, setBusca] = useState('');
  const [mostrarHistorico, setMostrarHistorico] = useState(false);
  const [historico, setHistorico] = useState(vendaService.getRecentes());

  useEffect(() => {
    setProdutos(produtoService.getAll());
  }, []);

  // Buscar produtos
  const produtosFiltrados = produtos.filter(p =>
    p.nome.toLowerCase().includes(busca.toLowerCase()) ||
    p.categoria.toLowerCase().includes(busca.toLowerCase())
  );

  // Adicionar ao carrinho
  const adicionarAoCarrinho = (produto: Produto) => {
    if (produto.quantidade <= 0) {
      alert('Produto sem estoque!');
      return;
    }

    setCarrinho(prev => {
      const existente = prev.find(item => item.produto.id === produto.id);
      if (existente) {
        if (existente.quantidade >= produto.quantidade) {
          alert('Quantidade em estoque insuficiente!');
          return prev;
        }
        return prev.map(item =>
          item.produto.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...prev, { produto, quantidade: 1 }];
    });
  };

  // Remover do carrinho
  const removerDoCarrinho = (id: string) => {
    setCarrinho(prev => prev.filter(item => item.produto.id !== id));
  };

  // Atualizar quantidade no carrinho
  const atualizarQuantidade = (id: string, novaQuantidade: number) => {
    if (novaQuantidade <= 0) {
      removerDoCarrinho(id);
      return;
    }

    const produto = produtos.find(p => p.id === id);
    if (produto && novaQuantidade > produto.quantidade) {
      alert('Quantidade em estoque insuficiente!');
      return;
    }

    setCarrinho(prev =>
      prev.map(item =>
        item.produto.id === id
          ? { ...item, quantidade: novaQuantidade }
          : item
      )
    );
  };

  // Calcular total
  const total = carrinho.reduce(
    (acc, item) => acc + item.produto.preco * item.quantidade,
    0
  );

  // Finalizar venda
  const finalizarVenda = () => {
    if (carrinho.length === 0) {
      alert('Adicione produtos ao carrinho!');
      return;
    }

    for (const item of carrinho) {
      const sucesso = produtoService.atualizarEstoque(
        item.produto.id,
        item.quantidade
      );
      if (!sucesso) {
        alert(`Estoque insuficiente para ${item.produto.nome}!`);
        return;
      }
    }

    const produtosVendidos = carrinho.map(item => ({
      id: item.produto.id,
      nome: item.produto.nome,
    }));

    vendaService.registrarVenda(produtosVendidos, total);
    setProdutos(produtoService.getAll());
    setHistorico(vendaService.getRecentes());
    setCarrinho([]);
    alert('Venda realizada com sucesso! 🎉');
  };

  return (
    <BackgroundContainer>
      <div className="flex-1 pb-8">
        
        <HeaderVoltar titulo="Realizar Venda" showBack={true} />

        {/* Busca */}
        <div className="px-6 mt-4">
          <BuscarProduto value={busca} onChange={setBusca} />
        </div>

        {/* Lista de Produtos */}
        <div className="px-6 mt-4">
          <ListaProdutosVenda
            produtos={produtosFiltrados}
            onAdicionar={adicionarAoCarrinho}
          />
        </div>

        {/* Carrinho */}
        <div className="px-6 mt-6">
          <CarrinhoCompras
            itens={carrinho}
            total={total}
            onQuantidadeChange={atualizarQuantidade}
            onRemover={removerDoCarrinho}
            onFinalizar={finalizarVenda}
          />
        </div>

        {/* Botão Histórico */}
        <div className="px-6 mt-4">
          <BotaoAcaoRapida
            icone=""
            label={mostrarHistorico ? 'Ocultar Histórico' : 'Ver Histórico'}
            onClick={() => setMostrarHistorico(!mostrarHistorico)}
            cor="petroleo"
            tamanho="md"
          />
        </div>

        {/* Histórico */}
        {mostrarHistorico && (
          <div className="px-6 mt-4">
            <HistoricoVendas vendas={historico} />
          </div>
        )}
      </div>
    </BackgroundContainer>
  );
}