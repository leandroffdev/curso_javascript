//funções parametrizadas
function nomeFuncao1(e) {
    console.log("Olá", e);
}
nomeFuncao1("Leandro");

const nomeConstante1 = function nomeFuncao(e) {
    console.log("Olá", e);
}
nomeConstante1("Isabelle");

function vetores(vetor) {
    for(i in vetor) {
        console.log(i);
    }
}
v = [1, 2, 3];
vetores(v);



// Funções usando parâmetros Rest (...valores -> chama-se spread operator)
const soma = function(...valores) {
    let res = 0;

    for (i of valores) {
        res+=i;
    }

    return res;
}
var resposta = soma(2, 3, 4, 5, 6, 7);
console.log(resposta);