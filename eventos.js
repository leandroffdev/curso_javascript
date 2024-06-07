const curso = {
    nome: "JavaScript",
    completar() {
        console.log("Curso Completo");
    },
};

console.log(curso.nome);
curso.completar();

// Eventos
// addEventListener -> comando para adicionar eventos
const ativar = document.querySelector('.ativar');
function handleClick() {
    console.log('Clicou em:', ativar);
}
// A função passada é chamada de callback
ativar.addEventListener('click', handleClick);


// Evento 2
const ativar2 = document.querySelector('.ativar2');


/** @param {MouseEvent} event*/
function handleClick2(event) {
    console.log(event);

    const elemento = event.currentTarget;

    const posicaoMouse = {
        x: event.x,
        y: event.y,
    };
    const tempoPassado = event.timeStamp;
    const tipoAcao = event.type;

    console.log(elemento);
    console.log(posicaoMouse);
    console.log(tempoPassado);
    console.log(tipoAcao);
}
ativar2.addEventListener('click', handleClick2)