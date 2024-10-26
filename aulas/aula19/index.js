const elemento = document.getElementsByTagName('span');
console.log(elemento);

const elementoPorId = document.getElementById('titulo-principal');
console.log(elementoPorId.innerHTML);

const elementoPorClasse = document.getElementsByClassName('paragrafo');
console.log(elementoPorClasse[1].innerText);

const elementoPorNome = document.getElementsByName('meu-botao');
console.log(elementoPorNome);

function verificaSeExisteTag(elemento){
    return !!document.getElementsByTagName(elemento).length > 0;
}

function verificaSeExisteId(elemento){
    return !!document.getElementById(elemento);
}

function verificaSeExisteClasse(elemento){
    return !!document.getElementsByClassName(elemento).length > 0;
}

function verificaSeExisteNome(elemento){
    return !!document.getElementsByName(elemento).length > 0;
}

console.log(verificaSeExisteTag('main'));
console.log(verificaSeExisteId('meu-botao'));
console.log(verificaSeExisteClasse('paragrafo'));
console.log(verificaSeExisteNome('meu-botao'));

const listaDeElementos = ['header', 'ul', 'meu-botao', 'titulo-principal'];

const descobreTipoDoElemento = (lista) => {
    if(listaDeElementos.length === 0){
        console.log('Você não passou uma lista de elementos!');
    }else{
        for(let nome of lista){
            if(verificaSeExisteTag(nome)){
                console.log(`${nome} é uma tag`);
            }else if(verificaSeExisteId(nome)){
                console.log(`${nome} é um id`);
            }else if(verificaSeExisteClasse(nome)){
                console.log(`${nome} é uma classe`);
            }else if(verificaSeExisteNome(nome)){
                console.log(`${nome} é um nome`);
            }else{
                console.log(`${nome} não está no DOM`);   
            }
        }
    }
}

descobreTipoDoElemento(listaDeElementos);