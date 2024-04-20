//Uso de funcoes no JavaScript
function parimpar(n){
    if(n%2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}

let res = parimpar(11)
console.log(res)

/* ou use: console.log(parimpar(11))

---------------------
Parametros opcionais
*/

function soma(n1=0,n2=0){
    return n1 + n2
}

var resultado = soma(12, 45)
console.log(resultado)

console.log(soma(20,60))



/*
Colocando funcao como um valor em uma variavel
 */

let v = function(x){
    return x*2

}
console.log(v(5))
//-----------------

function fatorial(n){
    let fat = 1
    for(let c = n;c > 1;c--){
        fat*=c
}
    return fat
}

console.log(fatorial(10))

//Recursividade

function fatoriall(n){
    if (n == 1){
        return 1
    }else{
        return n * fatoriall(n-1)
    }
}

console.log(fatoriall(5))