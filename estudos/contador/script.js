function check(){
    var inicio = document.querySelector('#inicio')
    var fim = document.querySelector('#fim')
    var passo = document.querySelector('#pass')
    var res = document.querySelector('#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('ERRO! Dados insuficientes.')
        res.innerHTML = `Contagem impossível`
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f){
            //Contagem crescente
            for(var c = i; c<= f;c+=p){
                res.innerHTML += ` ${c} \u{1f449}` 
            }
            res.innerHTML += `\u{1f3c1}`
        }else{
            //Contagem regressiva
            for(c = i; c>=f; c-=p){
                res.innerHTML += `${c}\u{1f449}`
            }
            res.innerHTML += `\u{1f3c1}`
        }
    
    }
    
}