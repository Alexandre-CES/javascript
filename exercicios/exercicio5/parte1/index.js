
/*
*Construa uma página HTML com um campo de texto, um botão "Curtir" e um parágrafo que exibe a lista de pessoas que clicaram no botão curtir. Toda vez que se preencher um nome no campo de texto e clicar em curtir, seu código Javascript deve armazenar o nome em um array (verifique se o nome já está lá) e alterar o parágrafo final da página de acordo com as regras:
- Lista vazia: "Ninguém curtiu"
- 1 pessoa curtiu: "[Nome da pessoa] curtiu"
- 2 pessoas curtiram: "[Pessoa 1] e [Pessoa 2] curtiram"
- 3 ou mais pessoas curtiram: 
"[Pessoa 1], [Pessoa 2] e mais [tamanho da lista - 2] pessoas curtiram" 
*/

const inputText = document.getElementById('nomePessoa');
const botao = document.getElementById('curtir');
const paragrafo = document.getElementById('paragrafo');

let pessoasQueCurtiram = [];

function alterarParagrafo() {
    const qtd = pessoasQueCurtiram.length;
    if (qtd === 0) {
        paragrafo.innerText = "Ninguém curtiu";
    } else if (qtd === 1) {
        paragrafo.innerText = `${pessoasQueCurtiram[0]} curtiu`;
    } else if (qtd === 2) {
        paragrafo.innerText = `${pessoasQueCurtiram[0]} e ${pessoasQueCurtiram[1]} curtiram`;
    } else {
        paragrafo.innerText = `${pessoasQueCurtiram[0]}, ${pessoasQueCurtiram[1]} e mais ${qtd - 2} pessoas curtiram`;
    }
}

botao.addEventListener('click', () => {
    const nome = inputText.value.trim();
    if (nome === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }
    if (pessoasQueCurtiram.includes(nome)) {
        alert('Pessoa já curtiu');
        return;
    }

    pessoasQueCurtiram.push(nome);
    alterarParagrafo();
    inputText.value = '';
});

