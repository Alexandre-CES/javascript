const verificaSeExisteElemento = (seletor) =>{
    const elemento = document.querySelector(seletor);
    return !!elemento
}

const todosOsParagrafos = document.querySelectorAll('p');

console.log(todosOsParagrafos);

const contaElementosPorSeletor = (seletor) =>{
    if(verificaSeExisteElemento(seletor)){
        const todosOsElementos = document.querySelectorAll(seletor)
        console.log(`Existem ${todosOsElementos.length} elementos com o seletor`)
    }else{
        console.log(`Não existem elementos com o seletor ${seletor}`)
    }
}

contaElementosPorSeletor('li')