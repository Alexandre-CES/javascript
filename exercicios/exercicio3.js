

function calcularTempoRestante(dataFutura){
    const agora = new Date().getTime();
    const diferencaDeDatas = dataFutura - agora;

    const segundosDeUmMinuto = 60 * 1000;
    const segundosdeUmaHora = 60 * segundosDeUmMinuto;
    const segundosDoDia = 24 * segundosdeUmaHora;

    const dias = Math.floor(diferencaDeDatas / segundosDoDia);
    const horas = Math.floor((diferencaDeDatas % segundosDoDia) / segundosdeUmaHora);
    const minutos = Math.floor((diferencaDeDatas % segundosdeUmaHora) / segundosDeUmMinuto);
    const segundos = Math.floor((diferencaDeDatas % segundosDeUmMinuto) / 1000);

    return {
        dias,
        horas,
        minutos,
        segundos
    };
}

function atualizarTemporizador(){
    const dataFutura = new Date('2024-12-25T00:00:00').getTime();
    const tempoRestante = calcularTempoRestante(dataFutura);

    console.log(tempoRestante);
}

setInterval(atualizarTemporizador, 1000);