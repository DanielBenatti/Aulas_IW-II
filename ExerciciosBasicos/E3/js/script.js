document.getElementById("bot1").addEventListener("click", function() {
    exibirMensagem("Botão 1 clicado.");
});

document.getElementById("bot2").addEventListener("click", function() {
    exibirMensagem("Botão 2 clicado.");
});

document.getElementById("bot3").addEventListener("click", function() {
    exibirMensagem("Botão 3 clicado.");
});

function exibirMensagem(mensagem) {
    document.getElementById("mens").innerText = mensagem;
}