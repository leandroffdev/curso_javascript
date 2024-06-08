const { text } = require("body-parser");

if(true) {
    console.log('Condicionais: Código executado!')
}
if(false) {
    console.log('Não executado')
}

const condicao = 100

console.log("Condicionais boolean:", Boolean(condicao))

const elemento = document.querySelector('body');
const elementoNaoExiste = document.querySelector('article');
console.log("Condicionais body:", Boolean(elemento));
console.log("Condicionais article:", Boolean(elementoNaoExiste));

const texto = 'JavaScript';
const textoVazio = '';
console.log("Condicionais texto:", Boolean(texto));
console.log("Condicionais vazio:", Boolean(textoVazio));

const numero = 20;
const numeroZero = 0;

console.log("Condicionais numero 20:", Boolean(numero));
console.log("Condicionais numero 0:", Boolean(numeroZero));

const elemento2 = document.querySelector('main');

function acao() {
    elemento2.style.background = '#blue';
}
if(elemento2) {
    elemento2.addEventListener('mousemove', acao)
}

// Operadores Lógicos - AND
if(true && false) {
    console.log('Não executa');
}

// Operadores Lógicos = OR
if(true || false) {
    console.log('Executa');
}

//Operadores de comparacao
console.log('20' == 20);
console.log('20' === 20);
console.log('20' !== 20);
console.log(5 > 10);
console.log(20 < 10);
console.log(20 >= 20);
console.log(20 <= 30);

const elemento3 = document.querySelector('.ativar')
const texto3 = elemento3.innerText;

console.log(texto3);

if(texto3.toUpperCase() === 'ATIVAR') {
    console.log('Executar código!')
}

