document.getElementById("bot").addEventListener("click", function() {

    var nome = prompt("Digite seu nome:");

    if (nome !== null && nome !== "") {
        var mensagem = "Olá, " + nome + "! Seja muito bem vindo!";
        document.getElementById("mens").innerText = mensagem;

    } else {
        document.getElementById("mens").innerText = "Olá! Seja muito bem vindo!";
    }
});