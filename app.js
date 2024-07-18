let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

 function verificarChute() {
     let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    if(chute == numeroSecreto) {
       exibirTextoNaTela('h1' , 'Acertou!')
       exibirTextoNaTela ('p' , 'Voce descobriu o número secreto!')
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1)
}