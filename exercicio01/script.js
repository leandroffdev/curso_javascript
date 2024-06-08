const circulo = document.querySelector('.circulo');
// console.log(circulo);

function seguirMouse(event) {
    // console.log(event);
    const x = event.x;
    const y = event.y;

    console.log("x:", x, ", y:", y);
    circulo.style.top = y + "px";
    circulo.style.left = x + "px";
    circulo.style.transition = .2 + "s";
};

window.addEventListener('mousemove', seguirMouse);