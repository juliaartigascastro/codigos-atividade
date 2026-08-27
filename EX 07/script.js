const botaoSair = document.querySelector('#sair');

if (botaoSair) {
  botaoSair.addEventListener('click', () => {
    alert('ação de saída acionada.');
  });
}