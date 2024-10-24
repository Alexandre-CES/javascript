import { ordenarLista } from './module.js';

function Main(){
    let lista = createRandomList();
    console.log(lista)

    lista = ordenarLista(lista);
    console.log(lista);
}

function createRandomList(){
    let lista = [];
    let num;
    let size = Math.floor(Math.random() * 20) + 5;

    for (let i = 0; i < size; i++){
        num = Math.floor(Math.random() * 100);
        lista.push(num)
    }

    return lista
}

Main();