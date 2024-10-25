const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34];


function iteraSobreOArray(){
    for(let i = 0; i < fibonacci.length; i++){
        console.log(i+1, '° item',fibonacci[i]);
    }
}

iteraSobreOArray();
console.log('-----------------------')

function contaAte(numero){
    console.log('contagem: ')
    for(let conta = 1; conta <= numero; conta++){
        console.log('Mariana conta', conta);
    }
}

contaAte(3);
console.log('---');
contaAte(5);
console.log('---');
contaAte();
console.log('--------------------');

function verificaItemNoArray(listaDeNumeros){
    for(let item of listaDeNumeros){
        console.log(item);
    }
}

verificaItemNoArray(fibonacci);
console.log('--------------------');

function verificaItemPorIndice(listaDeNumeros){
    for (let indice in listaDeNumeros){
        console.log(listaDeNumeros[indice]);
    }
}

verificaItemPorIndice(fibonacci);
console.log('--------------------');

function contaPeloMenosUm(numeroLimite){
    let numero = 0;
    do{
        console.log(numero);
        numero++;
    }while(numero <= numeroLimite);
}

contaPeloMenosUm(1);
contaPeloMenosUm();
console.log('----------------')

function verificaSePodeAte(numeroLimite){
    let numero = 0;
    while(numero <= numeroLimite){
        console.log(numero);
        numero++;
    }
}

verificaSePodeAte(1);
verificaSePodeAte(0);