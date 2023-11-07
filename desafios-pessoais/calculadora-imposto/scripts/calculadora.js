function calcular(){
    var txtsalario = document.getElementById('isalario')
    var txtdependentes = document.getElementById('idependentes')
    var salario = Number(txtsalario.value)
    var dependentes = Number(txtdependentes.value)
    var res = document.getElementById('res')

    var Imposto = 0

    if (salario <= 1903.98){
        res.innerHTML = 'Isento de Imposto'   

    } else if(salario >= 1903.99 && salario < 2826.66 ){
        Imposto = (salario * (7.5/100)) 

    } else if(salario >= 2826.66 && salario < 3751.06){
        Imposto = (salario * (15/100))

    } else if(salario >= 3751.06 && salario < 4664.68){
        Imposto = (salario * (22.5/100))

    }  else{
        Imposto = (salario * (27.5/100))

    }

    var totaltax = Imposto - (dependentes * 189.59)
    totaltax = totaltax.toFixed(2)
    if(dependentes < 0 || salario < 0){
        res.innerHTML = "[Erro] Verifique os dados e tente novamente"
    }else if (totaltax < 0){
        res.innerHTML = `Seu salário é R$${salario} e você possui ${dependentes} dependente(s), portanto terá que pagar R$0`
    }else{
        res.innerHTML = `Seu salário é R$${salario} e você possui ${dependentes} dependente(s), portanto terá que pagar R$${totaltax}`
    }
    
}

