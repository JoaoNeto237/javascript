function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados inseridos e tente novamente!')
    }else{
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gen = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagem_menino.jpg')

            }else if (idade < 21){
                img.setAttribute('src', 'imagem_jovemhomem.jpg')
            }else if (idade < 50){
                img.setAttribute('src' , 'imagem_homem.avif')
            }else{
                img.setAttribute('src', 'imagem_idoso.webp')
            }
        }else if (fsex[1].checked){
            gen = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagem_menina.png')

            }else if (idade < 21){
                img.setAttribute('src', 'imagem_jovemmulher.jpg')
            }else if (idade < 50){
                img.setAttribute('src', 'imagem_mulher.jpg')
            }else{
                img.setAttribute('src', 'imagem_idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }

}