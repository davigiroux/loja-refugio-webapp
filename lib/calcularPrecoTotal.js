export default function calcularPrecoTotal(carrinho) {
  return carrinho.reduce((acumulado, itemCarrinho) => {
    if (!itemCarrinho.produto) return acumulado;

    return acumulado + itemCarrinho.quantidade * itemCarrinho.produto.preco;
  }, 0);
}
