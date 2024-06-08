const cidades = [
    'Toronto',
    'Quebec',
    'Vancouver',
    'Halifax',
    'Ottawa'
];
cidades.forEach((item, index, array) => {
    // console.log(item, index);
    // console.log(array);
    let body = document.querySelector('body');
    // console.log(body);
    body.innerHTML += '<li class="list">' + item + '</li>';
});


cidades.forEach(function(item, index, array){});


const links = document.querySelectorAll(`a`)
function logHref(item) {
    const href = item.href;
    console.log(href);
}
links.forEach(logHref);
//Primeiro link
console.log(links[0]);