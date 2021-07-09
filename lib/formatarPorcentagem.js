export function formatarPorcentagem(valorBase, valorPromocional) {
  const porcentagemEmTexto = parseInt((1 - valorPromocional / valorBase) * 100)
    .toString()
    .replace('.', ',');

  return `${porcentagemEmTexto}%`;
}
