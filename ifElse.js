const idade = 10;

if(idade > 18) {
    console.log(`Maior de idade!`);
}
else if(idade <= 0) {
    console.log(`Não nasceu`);
}
else {
    console.log(`Menor de idade!`);
}

console.log("=============")


const usuarios = [
    {
        nome: 'Leandro',
        idade: 35,
        profissao: 'FrontEnd'
    },
    {
        nome: 'Isabelle',
        idade: 29,
        profissao: 'UI/UX Design'
    },
    {
        nome: 'Alice',
        idade: 6,
        profissao: 'BackEnd'
    },
    {
        nome: 'Iosef',
        idade: 6,
        profissao: 'Boneco'
    }
]

usuarios.forEach(usuario => {
    if(usuario.idade > 18) {
        console.log(`O usuário ${usuario.nome} é maior de idade!`);
    }
    else if(usuario.nome == 'Iosef') {
        console.log(`O usuário ${usuario.nome} é um boneco!`);
    }
    else {
        console.log(`O usuário ${usuario.nome} é menor de idade!`);
    }
});