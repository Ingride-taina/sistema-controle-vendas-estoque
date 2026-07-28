export interface Produto {
  id: string;
  nome: string;
  categoria: string;
  preco: number;
  quantidade: number; 
}

export interface Venda {
  id: string;
  data: string;
  produtos: {
    id: string;
    nome: string;
  }[];
  total: number;
}


export const produtoService = {

  getAll: (): Produto[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem('produtos');
    if (!data) {
      

      const produtosIniciais: Produto[] = [
        { id: '1', nome: 'Café Especial', categoria: 'Grãos', preco: 3.00, quantidade: 10 },
        { id: '2', nome: 'Arroz Integral', categoria: 'Grãos', preco: 15.00, quantidade: 5 },
        { id: '3', nome: 'Suco de Laranja', categoria: 'Bebidas', preco: 15.00, quantidade: 8 },
      ];
      localStorage.setItem('produtos', JSON.stringify(produtosIniciais));
      return produtosIniciais;
    }
    return JSON.parse(data);
  },

 
  saveAll: (produtos: Produto[]): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('produtos', JSON.stringify(produtos));
  },

 
  add: (produto: Omit<Produto, 'id'>): Produto => {
    const produtos = produtoService.getAll();
    const novoProduto: Produto = {
      ...produto,
      id: Date.now().toString(),
    };
    produtos.push(novoProduto);
    produtoService.saveAll(produtos);
    return novoProduto;
  },

  update: (id: string, dados: Partial<Produto>): Produto | null => {
    const produtos = produtoService.getAll();
    const index = produtos.findIndex(p => p.id === id);
    if (index === -1) return null;
    produtos[index] = { ...produtos[index], ...dados };
    produtoService.saveAll(produtos);
    return produtos[index];
  },

 
  delete: (id: string): boolean => {
    const produtos = produtoService.getAll();
    const filtrados = produtos.filter(p => p.id !== id);
    if (filtrados.length === produtos.length) return false;
    produtoService.saveAll(filtrados);
    return true;
  },


  getById: (id: string): Produto | null => {
    const produtos = produtoService.getAll();
    return produtos.find(p => p.id === id) || null;
  },


  atualizarEstoque: (id: string, quantidadeVendida: number): boolean => {
    const produtos = produtoService.getAll();
    const index = produtos.findIndex(p => p.id === id);
    if (index === -1) return false;
    if (produtos[index].quantidade < quantidadeVendida) return false; // Estoque insuficiente
    produtos[index].quantidade -= quantidadeVendida;
    produtoService.saveAll(produtos);
    return true;
  }
};


export const vendaService = {

  getAll: (): Venda[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem('vendas');
    if (!data) return [];
    return JSON.parse(data);
  },

  
  saveAll: (vendas: Venda[]): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('vendas', JSON.stringify(vendas));
  },

  registrarVenda: (produtosVendidos: { id: string; nome: string }[], total: number): Venda => {
    const vendas = vendaService.getAll();
    const novaVenda: Venda = {
      id: Date.now().toString(),
      data: new Date().toLocaleString('pt-BR'),
      produtos: produtosVendidos,
      total: total,
    };
    vendas.push(novaVenda);
    vendaService.saveAll(vendas);
    return novaVenda;
  },

  getRecentes: (limite: number = 10): Venda[] => {
    const vendas = vendaService.getAll();
    return vendas.slice(-limite).reverse();
  }
};