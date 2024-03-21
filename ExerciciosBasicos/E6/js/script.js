document.getElementById("inserir").addEventListener("click", function() {
    var nomeProduto = prompt("Digite o nome do produto:");
    var precoProduto = parseFloat(prompt("Digite o preço do produto:"));
    var valorDinheiro = parseFloat(prompt("Digite o valor em dinheiro para pagamento:"));

    if (nomeProduto !== null && nomeProduto !== "" && !isNaN(precoProduto) && precoProduto > 0 &&
        !isNaN(valorDinheiro) && valorDinheiro >= precoProduto) {

        var troco = valorDinheiro - precoProduto;

        document.getElementById("info").innerHTML = "<strong>Informações do Produto:</strong><br>" +
                                                            "<strong>Nome:</strong> " + nomeProduto + "<br>" +
                                                            "<strong>Preço:</strong> R$ " + precoProduto.toFixed(2) + "<br>" +
                                                            "<strong>Valor em reais:</strong> R$ " + valorDinheiro.toFixed(2) + "<br>" +
                                                            "<strong>Troco:</strong> R$ " + troco.toFixed(2);
    } 
    else {
        document.getElementById("info").innerText = "Erro ao inserir informações.";
    }
});