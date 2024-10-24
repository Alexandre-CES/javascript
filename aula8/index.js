const todoMundoVe = 'Todo mundo vê essa variável de escopo global';

function executaEscopoGlobal(){
    console.log(todoMundoVe);
}

function executaEscopoLocal(){
    const visivelEmEscopoLocal = 'Só quem está no bloco da função vê essa variável de escopo local';
    console.log(visivelEmEscopoLocal);

    function chamaDentroDoEscopo(){
        console.log('dentro do escopo =>', visivelEmEscopoLocal);
        const dentroLocal = false;
        console.log(dentroLocal);
    }

    //console.log(dentroLocal); => Error

    chamaDentroDoEscopo();
}

executaEscopoGlobal();
executaEscopoLocal();

//console.log(visivelEmEscopoLocal); => Error