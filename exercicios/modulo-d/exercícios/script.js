
function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora < 6 ) { //madrugada
    img.src = 'imagens/madrugada.png'
    document.body.style.backgroundColor = '#031021'

}else if ( hora >= 6 && hora < 12){ //manhã
    img.src = 'imagens/manha.png'
    document.body.style.backgroundColor = '#f2ceb1'

} else if( hora >=12 && hora < 19){ //tarde
    img.src = 'imagens/tarde.png'
    document.body.style.backgroundColor = '#91c4fd'

} else if(hora >= 19){ //noite
    img.src = 'imagens/noite.png'
    document.body.style.backgroundColor = '#172133'
    
}
}