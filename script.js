var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var esc = document.getElementById('res')
var alterar = document.getElementById('alterar')


if(hora >= 18){
    esc.innerHTML = (`Agora são ${hora} horas`)
    alterar.style.backgroundColor='#392605'
    img.setAttribute('src','./imagens/noite.jpg') 
    
}else if(hora > 12){
    esc.innerHTML = (`Agora são ${hora} horas`)
    alterar.style.backgroundColor='#FAB743'
    img.setAttribute('src','./imagens/tarde.jpg') 
    
}else{
    esc.innerHTML = (`Agora são ${hora} horas`)
    alterar.style.backgroundColor='#A0780A'
    img.setAttribute('src','./imagens/amanhecer.jfif') 
}