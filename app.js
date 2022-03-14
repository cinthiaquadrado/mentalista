var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);

    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Acertou!"
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Digite um número de 0 a 10!"
    } else {
        elementoResultado.innerHTML = "Você errou!"
    }


    var dica = "";
    if (chute < numeroSecreto) {
        dica = "Dica: o número secreto é maior!";
    } else if (chute == numeroSecreto || chute > 10 || chute < 0) {
        dica = "";
    } else {
        dica = "Dica: o número secreto é menor!";
    }

    visualizadica.innerHTML = dica;
}