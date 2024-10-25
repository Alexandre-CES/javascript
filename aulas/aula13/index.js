const meusDados = {
    nome: 'Alexandre',
    sobrenome: 'Cabral',
    moraNoBrasil: true,
    idade: 19,
    pegaDocumento: () =>{
        console.log('CPF: 1234567890');
    }
};

// verificando se objeto possui determinado valor
function objetoPossuiValor(valorDaChave){
    const valoresDoObjeto = Object.values(meusDados);
    return valoresDoObjeto.includes(valorDaChave);
}

console.log(objetoPossuiValor('Alexandre'));
console.log(objetoPossuiValor('Cabral'));
console.log(objetoPossuiValor(true));
console.log(objetoPossuiValor(19));
console.log('----------------------------');

console.log(objetoPossuiValor('Robsob'));
console.log(objetoPossuiValor('Douglas'));
console.log(objetoPossuiValor(false));
console.log(objetoPossuiValor(35));
console.log('----------------------------');

function objetoPossuiChave(nomeDaChave){
    const valoresDoObjeto = Object.keys(meusDados);
    return valoresDoObjeto.includes(nomeDaChave);
}

console.log(objetoPossuiChave('nome'));
console.log(objetoPossuiChave('sobrenome'));
console.log(objetoPossuiChave('moraNoBrasil'));
console.log(objetoPossuiChave('idade'));
console.log('------------------------------');

console.log(objetoPossuiChave('Nome'));
console.log(objetoPossuiChave('Sobrenome'));
console.log(objetoPossuiChave('MoraNoBrasil'));
console.log(objetoPossuiChave('carro'));
console.log('------------------------------');

meusDados.pegaDocumento();