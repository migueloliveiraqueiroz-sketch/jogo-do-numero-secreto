let listaDeNumerosSorteados = [];
let numero_Secreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag)
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
exibirTextoNaTela('h1', "jogo do numero secreto");
exibirTextoNaTela('p', "Escolha um numero de 1 a 100");
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numero_Secreto) {
        exibirTextoNaTela('h1', 'você venceu!');
        let mensagemTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        exibirTextoNaTela('p', `você descobriu o numero secreto com ${tentativas} ${mensagemTentativas}`);
        document.getElementById("reiniciar").removeAttribute('disabled');
        } else {
        if (chute > numero_Secreto){
            exibirTextoNaTela('p', `o numero secreto é menor que ${chute}`);
        } else {
                 exibirTextoNaTela('p', `o numero secreto é maior que ${chute}`);
        }
        tentativas++;
        LimparCampo();
    }

}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * 100 + 1);
   let quantidadeDeElemntosNaLista = listaDeNumerosSorteados.length;

if (quantidadeDeElemntosNaLista == 100) {
    listaDeNumerosSorteados = [];
}

     if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
     } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
     }
}


function LimparCampo() {
    chute = document.querySelector('input');
    chute.value = "";
}
function reiniciarJogo() {
    numero_Secreto = gerarNumeroAleatorio();
    LimparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}








