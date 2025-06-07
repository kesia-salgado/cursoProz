 function mostrarMensagem() {
    alert("Olá, eu sou a Kesia!");
  }

  function verificarNumero() {
    let numero = document.getElementById("número").value;
    numero = Number(numero);
    let mensagem = "";

    if (numero > 0) {
        mensagem = "O número é positivo.";
    }
    else if ( numero < 0) {
        mensagem = "O número é negativo.";
    }
    else {
        mensagem = " O número é zero.";
    }

    document.getElementById("resultado").innerHTML = mensagem;

}