export default function formatarDinheiro(preco = 0) {
  const precoEmTexto = (preco / 100).toFixed(2).toString().replace('.', ',');
  return `R$ ${precoEmTexto}`;
}
