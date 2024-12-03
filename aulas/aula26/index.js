
(()=>{

    const botaoAceitar = document.getElementById('meu-botao')
    const botaoRecusar = document.getElementById('esquecer')

    function chamaPromise (numeroEnviado){
        const corridaDeApp = new Promise((resolve,reject)=>{
            if(numeroEnviado % 2 == 0){
                resolve('Deu bom')
            }else{
                reject('Deu ruim')
            }
        })

        return corridaDeApp
    }

    botaoAceitar.addEventListener('click', ()=>{
        chamaPromise(2).then((msg)=>{
            console.log(msg)
        })
    })

    botaoRecusar.addEventListener('click', () => {
        chamaPromise(1)
    })

})()