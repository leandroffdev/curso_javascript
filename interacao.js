const botao = document.querySelector('.interacao-btn');

function mostrar() {
    const texto = document.querySelector('.interacao-txt');
    texto.classList.toggle('ativar-txt');
    if(botao.innerHTML == "Mostrar texto"){
        botao.innerHTML = "Remover texto"
    } else {
        botao.innerHTML = "Mostrar texto"
    }
}

botao.addEventListener('click', mostrar);