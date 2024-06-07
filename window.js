// Window - objeto que representa a janela do browser e contem todo o DOM

const alturaTela = window.innerHeight
const larguraTela = window.innerWidth

console.log("Altura da Tela:", alturaTela);
console.log("Largura da Tela:", larguraTela);

/** @param {MouseEvent} event */
function coordenadaMouse(event) {
    const coordenadas = {
        x: event.x,
        y: event.y
    };
    console.log("Coordenadas do Mouse: x:", coordenadas.x, "y:", coordenadas.y)
}
window.addEventListener('mouseover', coordenadaMouse);


/** @param {MouseEvent} event */
function scrollEvent(event) {
    console.log("Usou o Scroll");
    console.log(event);
    console.log(window.scrollY);


}

window.addEventListener('scroll', scrollEvent)