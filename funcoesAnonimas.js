// Funções anônimas - Não possuem nome
const nomeConstante2 = function () {
    console.log("Olá mundo!");
}
const nomeConstante3 = () => {
    console.log("Olá mundo!");
}

// Arrow Function
var x = 10;
var y = 20;
const arrowFunction = (x, y) => { return x + y};

let a = 3;
let b = 5;

subtracao = (a, b) => (a - b);
multi = (a, b) => (a * b);
console.log(subtracao(a,b));
console.log(multi(a,b));
console.log(arrowFunction(x,y));

// Função construtor anônima
const f = Function("v1", "v2", "v3", "return v1 + v2 + v3");
console.log(f(10, 20, 30));