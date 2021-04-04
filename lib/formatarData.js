export function formatarData(data) {
  const dataObj = new Date(data);
  const ano = dataObj.getFullYear();
  const mes = dataObj.getMonth();
  const dia = dataObj.getDate();

  const dataDoPedido = `${dia < 10 ? `0${dia.toString()}` : dia}/${
    mes + 1 < 10 ? `0${(mes + 1).toString()}` : mes + 1
  }/${ano}`;

  return dataDoPedido;
}
