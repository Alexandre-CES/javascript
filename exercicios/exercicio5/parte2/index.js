/*
*Vamos construir uma lista de tarefas. Você deve criar um array de objetos Tarefa com as propriedades descrição (string) e status (boolean). Sua página HTML deve conter:

- Um campo de texto para cadastrar a descrição de uma nova tarefa.
- Um botão "adicionar" que inclui a nova tarefa no array (inicialize o status).

- Uma sequência de checkboxes acompanhados das descrições das tarefas já adicionadas. O checkbox será usado para alterar o status da respectiva tarefa. 

*O usuário pode adicionar novas tarefas preenchendo o campo de texto e clicando em adicionar. Também deve poder clicar no checkbox de cada tarefa para alterar o seu status entre Concluído e Não concluído. 

- Você deve estilizar as descrições das tarefas adicionadas para diferenciar as concluídas das não concluídas (use a criatividade no CSS).
*/

const inputDescricao = document.getElementById('descricao');
const botao = document.getElementById('botao');
const listaTarefas = document.getElementById('lista-tarefas');

let tarefas = [];

function mostrarTarefas(){
    listaTarefas.innerHTML = ''; 

    tarefas.forEach((tarefa) => {
        const divTarefa = document.createElement('div');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.status;
        checkbox.addEventListener('change', () => {
            tarefa.status = checkbox.checked;
            mostrarTarefas();
        });

        const descricao = document.createElement('span');
        descricao.textContent = tarefa.descricao;
        descricao.classList.toggle('concluida', tarefa.status);

        divTarefa.appendChild(checkbox);
        divTarefa.appendChild(descricao);
        listaTarefas.appendChild(divTarefa);
    });
}

botao.addEventListener('click', () => {
    const descricao = inputDescricao.value.trim();
    if(descricao == ''){
        alert('Inválido');
        return;
    }

    tarefas.push({
        descricao: descricao,
        status: false
    });
    inputDescricao.value = '';
    mostrarTarefas();
});
