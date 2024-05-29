
const obj = {
    prop: 'Eu sou a propriedade!',
    metodo: () => {
        return 'Sou o metodo detro do objeto'
    }

}

console.log(obj.prop)
console.log(obj.metodo())

//Declarando uma nova propriedade e um metodo

obj.prop2 = 'Nova propriedade'
obj.metodo2 = () => 'Sou o retorno do metodo'

//Acessando os componenetes com DOTNotation

console.log(obj.prop2)
console.log(obj.metodo2())

//Acessando os componentes com o Bracket notation (notacao de colchetes)

//Uma outra forma de acessar os componentes de um objeto e usando a notacao de colchetes.

const novoObj = {
    propriedade: 'Eu sou a propriedade',
    metodoNovo: () => 'Retorno do novo metodo'
}

console.log(novoObj['propriedade'])
console.log(novoObj['metodoNovo']())
