const listaL = ['JavaScript', 'HTML', 'CSS'];
const body = document.querySelector('body');

for(let index = 0; index < listaL.length; index++) {
    const item = lista[index];
    body.innerHTML += '<li>' + item + '</li>';
    console.log("Item", item);
}