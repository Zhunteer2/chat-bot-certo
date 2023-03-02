function idade() {
    let num1 = document.getElementsByName("idade")[0].value;


    if(num1>65){

 res="idoso"
    }

    else if(num1<18 , num1<0){
res="menor"


 }

 else{
res="maior"
 }
    document.getElementsByName("resultado")[0].value = res;

}
function resp1() {

    var resp1 = "Olá, seja bem vindo "

    var nome = document.getElementById("nome").value;

    document.getElementById("resp1").innerHTML = resp1 + nome;

}

function resp2() {

    var resp2 = "Que interessante você querer "

    var vida = document.getElementById("vida").value;

    document.getElementById("resp2").innerHTML = resp2 + vida;

}

function resp3() {

    var resp3 = "Entendo.. Mas seja o que acontecer, espero que dê tudo certo a você! "

    document.getElementById("resp3").innerHTML = resp3;

}

function alternarPerguntas() {
    var perguntas = document.getElementById("perguntas").getElementsByTagName("li");
    var numPerguntas = perguntas.length;

    // Seleciona um índice aleatório para a próxima pergunta
    var proxPerguntaIndex = Math.floor(Math.random() * numPerguntas);

    // Esconde todas as perguntas
    for (var i = 0; i < numPerguntas; i++) {
        perguntas[i].style.display = "none";
    }

    // Exibe a próxima pergunta selecionada aleatoriamente
    perguntas[proxPerguntaIndex].style.display = "block";
}