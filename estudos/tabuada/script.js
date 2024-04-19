function tabuada(){
    var num = document.querySelector('#num')
    var tab = document.querySelector('#tab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}