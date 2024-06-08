const botao = document.querySelector('.adicionar');


function somar() {
    let tela = document.querySelector('div');
    let valor = Number(tela.innerText);
    if(valor < 10) {
        tela.innerText = valor += 1;
        console.log(valor);
    }else {
        tela.innerText = "10 é o valor máximo."
    }
}

if(botao) {
    botao.addEventListener('click', somar);
}



