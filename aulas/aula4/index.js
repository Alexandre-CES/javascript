let meuNome = 'Alexandre';
console.log(meuNome);

meuNome = 'Robson';
console.log(meuNome);

function exibeNome(){
    let meuNome = 'Maria';
    console.log(meuNome);
}

exibeNome();
exibeNome();

const minhaArrowFunction = () => {
    console.log('executei arrow function');
};

const exibeNomeArrow = () =>{
    let meuNome = 'Maria Arrow function';
    console.log(meuNome);
};

minhaArrowFunction();
exibeNomeArrow();