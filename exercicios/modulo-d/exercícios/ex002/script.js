function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.getElementById('res')
    var img = document.createElement('img') //Criar tag
    img.setAttribute('id', 'foto') //criar atributo id="foto"
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("Erro") 
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero ='Homem'
            if (idade >= 0 && idade < 14){
                //menino
                img.setAttribute('src', 'imagens/menino.jpg')
            } else if(idade < 50){
                //jovem
                img.setAttribute('src', 'imagens/jovem-h.jpg')
            } else if(idade >= 60){
                //idosxo
                img.setAttribute('src', 'imagens/senhor.jpg')
            }
        } else if(fsex[1]){
            genero = 'Mulher'
            if (idade >= 0 && idade < 14){
                //menina
                img.setAttribute('src', 'imagens/menina.jpg')
            } else if(idade < 50){
                //jovem
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            } else if(idade >= 60){
                //idosa
                img.setAttribute('src', 'imagens/senhora.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado ${genero} de ${idade} anos.`
        res.appendChild(img) //para aparecer elemento criado por comando
    }
}

function fade(){
    var footer = document.getElementById('footer')
    
    if(footer.style.backgroundColor == 'black'){
        footer.style.backgroundColor = 'transparent'
    } else{
        footer.style.backgroundColor = 'black'
    }
}