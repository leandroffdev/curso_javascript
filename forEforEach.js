// FOR
const frutas = ['abacate', 'caju', 'ameixa', 'laranja']
for(let i=0;i<frutas;i++) {
    console.log(i)
}

const cidades = ["Natal", "Parnamirim", "SGA", "Maxaranguape"];
for(i in cidades) {
    console.log("Posição:", i);
}

for(i of cidades) {
    console.log("Cidade:", i);
    }

// forEach -> item, index, array

// item=dados/informacao,
// index=posicao,   (opcional)
// array=conteudo completo   (opcional)


const nomes = ["Açucar", "Arroz"];
nomes.forEach(item => {
    console.log(item);
});

const users = [
    {nome: 'Leandro', age: 35, contact:'(84)99916-3841'},
    {nome: 'Isabelle', age: 29, contact:'(84)99603-9606'},
    {nome: 'Elice', age: 6, contact:'(84)99633-3845'},
    {nome: 'Iosef', age: 6, contact:'(84)99955-3849'},
]
users.forEach(function(item, index, array){
    console.log(item);
    console.log(index);
    console.log(array);
});
users.forEach(item => {});