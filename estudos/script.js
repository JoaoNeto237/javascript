function loadd(){
    var msg = window.document.querySelector('#parent')
    var img = window.document.querySelector('#imagens')
    var data = new Date()
    var hora = data.getHours()
    var mnts = data.getMinutes()
    msg.innerHTML = `Agora são: ${hora}: ${mnts} hrs.`
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'imgs/Amanhecer01.jpg'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'imgs/fim-de-tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        //Boa noite
        img.src = 'imgs/imagemNoite.jpg'
        document.body.style.background = '#515154'
    }
}
