// => Dados
let livros = [
    {
        titulo: 'It: a coisa',
        autor: 'Stephen King',
        quantidade: 5
    },
    {
        titulo: 'Harry Potter e a pedra filosofal',
        autor: 'J. K. Rowling',
        quantidade: 10
    },
    {
        titulo: 'O Pequeno Príncipe',
        autor: 'Antoine de Saint-Exupéry',
        quantidade: 20
    },
    {
        titulo: '1984',
        autor: 'George Orwell',
        quantidade: 3
    },
    {
        titulo: 'Romeu E Julieta',
        autor: 'William Shakespeare',
        quantidade: 35
    }
];


// => Funções
function adicionarLivro(titulo, autor, quantidade){
    const jaExiste = livros.find(livro => livro.titulo === titulo)
    if (!jaExiste){
        livros.push({
            titulo: titulo,
            autor: autor,
            quantidade: quantidade
        })
        console.log('Livro adicionado com sucesso!');
        return true
    }else{
        console.log('Livro já existe no estoque! ');
        return false
    }
}

function removerLivro(titulo){
    const existe = livros.find(livro => livro.titulo === titulo)
    if(existe){
        for(let indice = 0; indice < livros.length; indice++){
            if (livros[indice].titulo === titulo){
                livros.splice(indice, 1);
            }
        }
        console.log('Livro deletado com sucesso!');
        return true
    }else{
        console.log('Livro não existe!');
        return false
    }
}

function atualizarQuantidade(titulo, novaQuantidade){
    const existe = livros.find(livro => livro.titulo === titulo)
    if(existe){
        for(let indice = 0; indice < livros.length; indice++){
            if (livros[indice].titulo === titulo){
                livros[indice].quantidade = novaQuantidade;
            }
        }
        console.log('Quantidade atualizada com sucesso!');
        return true
    }else{
        console.log('Livro não existe!');
        return false
    }
} 

function listarLivros(){
    for(let i = 0; i < livros.length; i++){
        console.log(livros[i]);
    }
}

// => Testes

console.log('Estoque inicial: ');
listarLivros();
console.log('-----------------------');

//adicionar livro
console.log('Quando já existe no estoque: ');
adicionarLivro('It: a coisa')
console.log('-----------------------');

console.log('Quando não existe no estoque: ');
if(adicionarLivro('teste', 'teste', 2)){
    listarLivros();
}
console.log('-----------------------');

//Remover livro
console.log('Quando existe no estoque: ');
if(removerLivro('It: a coisa')){
    listarLivros();
}
console.log('-----------------------');

console.log('Quando não existe no estoque: ');
removerLivro('teste');
console.log('-----------------------');

//atualizar quantidade
console.log('Quando existe no estoque: ');
if(atualizarQuantidade('Romeu E Julieta',1)){
    listarLivros();
}
console.log('-----------------------');

console.log('Quando não existe no estoque: ');
atualizarQuantidade('teste',213);
console.log('-----------------------');
