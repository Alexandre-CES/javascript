const botao = document.getElementById('meu-botao');
const inputText = document.getElementById('texto');

const logOla = () => console.log('olá, estudante!');
const logHello = () => console.log('Hello, World!');

addEventListener('load', logOla());

botao.addEventListener('mouseover', logHello);
botao.addEventListener('click', () => {
    const titulo = document.getElementById('titulo-principal');
    titulo.innerText = 'Mudou após o clique';
});

inputText.addEventListener('keypress', (e)=>{
    console.log(e.target.value);
});