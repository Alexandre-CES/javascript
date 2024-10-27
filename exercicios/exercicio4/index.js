/*
* Escreva um código JavaScript para realizar as seguintes manipulações:
- Mudar o texto do título.
- Alterar o estilo dos itens da lista.
- Adicionar uma classe a todos os parágrafos.
- Alterar o texto do botão.
*/

//1
let titulo = document.getElementsByTagName('h1');
titulo[0].innerText = 'título mudado';

//2
let itensDaLista = document.getElementsByTagName('li');
for(let i = 0; i < itensDaLista.length; i++ ){
    itensDaLista[i].style.color = 'red';
}

//3
let paragrafos = document.getElementsByTagName('p');
for(let i = 0; i < paragrafos.length; i++ ){
    paragrafos[i].classList = 'destaque';
}

//4
let botao = document.getElementsByTagName('button');
botao[0].innerText = 'texto alterado';