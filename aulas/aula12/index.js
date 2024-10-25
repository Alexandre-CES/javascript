const meusDados = {
    nome: 'Alexandre',
    sobrenome: 'Cabral',
    moraNoBrasil: true,
    idade: 19
};

console.log(meusDados);
console.log(meusDados.nome);
console.log(meusDados['nome']);

function retornaDadoPessoal(dadoPessoal){
    return meusDados[dadoPessoal];
}

console.log(retornaDadoPessoal('sobrenome'));
console.log(retornaDadoPessoal('moraNoBrasil'));
console.log(retornaDadoPessoal('idade'));
console.log(retornaDadoPessoal('abc'));
