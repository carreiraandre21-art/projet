/**
 * Gerenciador de Vendas - Carreira Wear
 * Demonstração de Clean Code, POO e Métodos Modernos de JS.
 */

class Loja {
    constructor(nome) {
        this.nome = nome;
        this.produtos = [];
        this.formatador = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    adicionarProduto(nome, preco, categoria, estoque) {
        const novoProduto = {
            id: Math.random().toString(36).substr(2, 9),
            nome,
            preco,
            categoria,
            estoque
        };
        this.produtos.push(novoProduto);
        console.log(`[LOG] Produto "${nome}" adicionado com sucesso.`);
    }

    // Aplica desconto baseado na categoria (Substitui o excesso de SWITCH)
    gerarRelatorioComDesconto(percentual, categoriaAlvo) {
        console.log(`\n--- RELATÓRIO DE BLACK FRIDAY: ${this.nome.toUpperCase()} ---`);
        
        const produtosProcessados = this.produtos
            .filter(p => p.categoria === categoriaAlvo)
            .map(p => {
                const valorDesconto = (p.preco * percentual) / 100;
                return {
                    ...p,
                    precoFinal: p.preco - valorDesconto,
                    economizado: valorDesconto
                };
            });

        if (produtosProcessados.length === 0) {
            console.log(`Nenhum produto encontrado na categoria: ${categoriaAlvo}`);
            return;
        }

        produtosProcessados.forEach(p => {
            console.log(`${p.nome} (${p.categoria}):`);
            console.log(`  > De: ${this.formatador.format(p.preco)}`);
            console.log(`  > Por: ${this.formatador.format(p.precoFinal)} (Economia de ${this.formatador.format(p.economizado)})`);
        });

        const valorTotalEstoque = produtosProcessados.reduce((acc, p) => acc + (p.precoFinal * p.estoque), 0);
        console.log(`\nValor total estimado em estoque (com desconto): ${this.formatador.format(valorTotalEstoque)}`);
    }

    buscarPorNome(termo) {
        return this.produtos.find(p => p.nome.toLowerCase().includes(termo.toLowerCase()));
    }
}

// --- TESTANDO O POTENCIAL DO SISTEMA ---

const minhaLoja = new Loja("Carreira Wear");

try {
    minhaLoja.adicionarProduto("Camiseta Oversized", 89.90, "Camisetas", 50);
    minhaLoja.adicionarProduto("Calça Cargo Black", 159.90, "Calças", 30);
    minhaLoja.adicionarProduto("Tênis Street", 299.99, "Calçados", 15);
    minhaLoja.adicionarProduto("Camiseta Básica Cotton", 45.00, "Camisetas", 100);

    // Aplicando 20% de desconto apenas em Camisetas
    minhaLoja.gerarRelatorioComDesconto(20, "Camisetas");

    // Busca rápida
    const busca = minhaLoja.buscarPorNome("Cargo");
    if (busca) {
        console.log(`\nBusca encontrada: ${busca.nome} custa ${minhaLoja.formatador.format(busca.preco)}`);
    }

} catch (error) {
    console.error("Erro no processamento da loja:", error.message);
}