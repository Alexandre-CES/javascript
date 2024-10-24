export function ordenarLista(lista){
    let minValueIndex;
    let value_tmp;
    for(let i = 0; i < lista.length; i++){
        minValueIndex = i;
        for (let j = i+1; j < lista.length; j++){
            if (lista[j] < lista[minValueIndex]){
                minValueIndex = j
            }
        }

        value_tmp = lista[i]
        lista[i] = lista[minValueIndex]
        lista[minValueIndex] = value_tmp
    }

    return lista
}