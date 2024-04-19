//Declarando variaveis compostas (arrays)
let num = [3,4,6]
console.log(num)
//Adicionando valores no array indicando o indice. O valor 7 vai ser adicionado no indice 3
num[3]= 7
console.log(num)
//Para adicionar o valor no final do array sem indicar o indice usa:
num.push(10)
console.log(num)
/*
Para saber o tamanho do array
*/
num.length
console.log(`O vetor tem ${num.length} posicoes`)
/*Para colocar o conteudo do array ordenado use o metodo .sort()
num.sort()

Para acessar os valores do array usando o for usamos a estrutura assim:
*/
for(let pos=0;pos<num.length;pos++){
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`)
}
//Maneira simplificada de usar o for
for(let p in num){
    console.log(num[p])
}

//Para buscar a chave de um valor pelo valor

var posicao = num.indexOf(6)
console.log(`O valor esta na posicao ${posicao}`)









