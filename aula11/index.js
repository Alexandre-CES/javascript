//arrays 2

const cores = ['Preto', 'Branco'];
console.log(cores);
console.log(cores[0]);
console.log(cores[1]);
console.log('Quantidade de elementos: ',cores.length);
console.log(cores.indexOf('Preto'));
console.log(cores.indexOf('Branco'));

//retorna -1, pois é um índice que nunca existirá
console.log(cores.indexOf('Vermelho'));

console.log('-------------')

//Adiciona novo elemento
cores.push('Vermelho');
console.log(cores);
console.log(cores.length);
console.log(cores.indexOf('Vermelho'));
console.log(cores.indexOf('Azul'));
cores.push('Azul');
console.log(cores);
console.log(cores.length);

console.log('---------------');

//remove primeiro elemento da lista
cores.shift();
console.log(cores);

//Adiciona elemento no início da lista
cores.unshift('Preto');
console.log(cores);

//remove último elemento da lista
cores.pop();
console.log(cores);

console.log('------------------')

function removeCor(nomeDaCor){
    const posicaoDaCor = cores.indexOf(nomeDaCor);
    if(posicaoDaCor >= 0){
        cores.splice(posicaoDaCor, 1)
    }
    console.log(cores);
}

removeCor('Branco');
removeCor('Vermelho');
removeCor('Vermelho');