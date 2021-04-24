export function formatarTelefone(telefone = '') {
  let telefoneFormatado = telefone.replace(/\D/g, '');
  telefoneFormatado = telefoneFormatado.replace(/^0/, '');
  if (telefoneFormatado.length > 10) {
    telefoneFormatado = telefoneFormatado.replace(
      /^(\d\d)(\d{5})(\d{4}).*/,
      '($1) $2-$3'
    );
  } else if (telefoneFormatado.length > 5) {
    telefoneFormatado = telefoneFormatado.replace(
      /^(\d\d)(\d{4})(\d{0,4}).*/,
      '($1) $2-$3'
    );
  } else if (telefoneFormatado.length > 2) {
    telefoneFormatado = telefoneFormatado.replace(
      /^(\d\d)(\d{0,5})/,
      '($1) $2'
    );
  } else {
    telefoneFormatado = telefoneFormatado.replace(/^(\d*)/, '$1');
  }

  return telefoneFormatado;
}
