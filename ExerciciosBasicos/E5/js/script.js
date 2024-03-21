document.getElementById("Produto").addEventListener("click", function() {
    
    var nomeProduto = prompt("Digite o nome do produto:");
    var precoProduto = parseFloat(prompt("Digite o preço do produto:"));

    if (nomeProduto !== null && nomeProduto !== "" && !isNaN(precoProduto) && precoProduto > 0) {
        document.getElementById("info").innerText = "Produto: " + nomeProduto + "\nPreço: R$ " + precoProduto.toFixed(2);
    } 

    else {
        document.getElementById("info").innerText = "Erro ao inserir informações do produto.";
    }
});