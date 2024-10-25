//if else com chaves
function eDiaOuEdeNoite(hora){
    let periodo = '';
    if (hora <= 18){
        periodo = 'É de dia';
    }else{
        periodo = 'É de noite';
    }
    return periodo
}

console.log(eDiaOuEdeNoite());
console.log(eDiaOuEdeNoite(11));
console.log(eDiaOuEdeNoite('dia'));
console.log(eDiaOuEdeNoite(21));
console.log('-----------------');

//if else sem chaves
function eMaiorDeIdade(idade){
    if(idade >= 18)
        console.log('Maior de idade');
    else
        console.log('Menor de idade');
}

eMaiorDeIdade(18);
eMaiorDeIdade('2');
eMaiorDeIdade('2a');
eMaiorDeIdade(true);
console.log('-------------------------');

//else if
function periodoDoDia(hora){
    if (hora < 12){
        console.log('Manhã');
    }else if(hora >= 12 && hora <= 18){
        console.log('Tarde');
    }else{
        console.log('Noite');
    }
}

periodoDoDia(2);
periodoDoDia(14);
periodoDoDia(20);
periodoDoDia(-30);
periodoDoDia(42);
console.log('----------------------------');

//limitar retorno
function periodoComRegra(hora){
    if (hora >= 0 && hora <= 24){
        periodoDoDia(hora);
    }else{
        console.log('Você passou uma hora inexistente');
    }
}

periodoComRegra(2);
periodoComRegra(13);
periodoComRegra(20);
periodoComRegra(-30);
periodoComRegra(42);
console.log('----------------------------');

//switch case
function menuEscolha(opcaoDoMenu){
    switch(opcaoDoMenu){
        case 1:{
            console.log('Você escolheu a primeira opção');
            break;
        }
        case 2:{
            console.log('Você escolheu a segunda opção');
            break;
        }
        default:{
            console.log('Você escolheu uma opção inválida');
        }
    }
}

menuEscolha(1);
menuEscolha(2);
menuEscolha('2');
menuEscolha(90);
console.log('-----------------------')

// condicional simples
function maiorDeIdadeSimples(idade){
    let condicaoIdade = idade >= 18 ? 'Maior de idade' : 'Menor de idade';
    return condicaoIdade;
}

console.log(maiorDeIdadeSimples(18));
console.log(maiorDeIdadeSimples(3));
console.log('---------------');

//retorno de string em condicional
function maiorDeIdadeUnario(idade){
    return idade >= 18 && 'Maior de idade';
}

console.log(maiorDeIdadeUnario(18));
console.log(maiorDeIdadeUnario(3));
console.log('---------------');

//retorno de condicional
function maiorDeIdadeUnario(idade){
    return idade >= 18;
}

console.log(maiorDeIdadeUnario(18));
console.log(maiorDeIdadeUnario(3));