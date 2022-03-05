const farol = document.getElementById ('farol');
const turnVerm = document.getElementById ('turnVerm');
const turnAma = document.getElementById ('turnAma');
const turnVer = document.getElementById ('turnVer');
const turnOff = document.getElementById ('turnOff');


function farolVerm () {
    farol.src = 'imagens/vermelho.png';
}

function farolAma () {
    farol.src = 'imagens/amarelo.png';
}

function farolVer () {
    farol.src = 'imagens/verde.png';
}

function farolOff () {
    farol.src = 'imagens/desligado.png'
}



turnVerm.addEventListener ('click', farolVerm);
turnAma.addEventListener ('click', farolAma);
turnVer.addEventListener ('click', farolVer);
turnOff.addEventListener ('click', farolOff);