document.getElementById("bot").addEventListener("click", function() {

    var nome = prompt("Digite seu nome:");

    if (nome !== null && nome !== "") {
        alert("Olá, " + nome + "! Seja muito bem vindo!");
    } else {
        alert("Olá! Seja muito bem vindo!");
    }
});