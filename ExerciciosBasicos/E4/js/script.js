document.getElementById("bot1").addEventListener("click", function() {
    exibirMensagem("Botão 1 clicado.");
    trocarCor("red")
});

document.getElementById("bot2").addEventListener("click", function() {
    exibirMensagem("Botão 2 clicado.");
    trocarCor("green")
});

document.getElementById("bot3").addEventListener("click", function() {
    exibirMensagem("Botão 3 clicado.");
    trocarCor("blue")
});

function exibirMensagem(mensagem) {
    var mensagemDiv = document.getElementById("mens");
    mensagemDiv.innerText = mensagem;
}

function trocarCor(cor) {
    var mensa = document.getElementById("mensa")
    mensa.style.color = cor;
}