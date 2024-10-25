function chamar(segundosDeAtraso){
    console.log(`Atrasou ${segundosDeAtraso} segundos`);
}

function chamaAtrasado(funcaoDeAtraso, segundosDeAtraso){

    //atrasa chamada de função
    setTimeout(() => funcaoDeAtraso(segundosDeAtraso), segundosDeAtraso * 1000);
}

chamaAtrasado(chamar, 1);

function chamarComIntervalo(funcaoDeIntervalo, intervalo){
    setInterval(() => funcaoDeIntervalo(intervalo), intervalo * 1000);
}

chamarComIntervalo(chamar,2)