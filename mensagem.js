function obterHoraAtual() {
    var data = new Date();
    var hora = data.getHours();
    return hora;
  }

  // Função para exibir mensagem com base na hora
  function exibirMensagem() {
    var horaAtual = obterHoraAtual();
    var mensagemDiv = document.getElementById('mensagem');

    if (horaAtual < 12) {
      mensagemDiv.innerHTML = 'Bom dia!';
    } else if (horaAtual < 18) {
      mensagemDiv.innerHTML = 'Boa tarde!';
    } else {
      mensagemDiv.innerHTML = 'Boa noite!';
    }
  }

  // Chame a função para exibir a mensagem ao carregar a página
  window.onload = exibirMensagem;