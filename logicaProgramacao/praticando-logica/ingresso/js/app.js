function comprar() {
  let tipo = document.getElementById('tipo-ingresso');
  let qtd = parseInt(document.getElementById('qtd').value);

  if(tipo.value === 'pista') {
    comprarPista(qtd);
  } else if(tipo.value === 'superior') {
    comprarSuperior(qtd);
  } else {
    comprarInferior(qtd);
  }
}

function comprarPista(qtd) {
  let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

  if(qtd > qtdPista) {
    alert('Quantidade indisponível para Pista');
  } else {
    qtdPista -= qtd;
    alert('Compra realizada com sucesso!');
    document.getElementById('qtd-pista').textContent = qtdPista;
    qtdPista.textContent = qtdPista;
  }
}

function comprarSuperior(qtd) {
  let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

  if(qtd > qtdSuperior) {
    alert('Quantidade indisponível para Superior');
  } else {
    qtdSuperior -= qtd;
    alert('Compra realizada com sucesso!');
    document.getElementById('qtd-superior').textContent = qtdSuperior;
    qtdSuperior.textContent = qtdSuperior;
  }
}

function comprarInferior(qtd) {
  let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

  if(qtd > qtdInferior) {
    alert('Quantidade indisponível para Inferior');
  } else {
    qtdInferior -= qtd;
    alert('Compra realizada com sucesso!');
    document.getElementById('qtd-inferior').textContent = qtdInferior;
    qtdInferior.textContent = qtdInferior;
  }
}