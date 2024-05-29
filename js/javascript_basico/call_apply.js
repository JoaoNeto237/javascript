const obj1 = {exemplo: 'exemplo 1', mostrathis: function thisCall(){
    console.log(this)
}}

obj1.mostrathis()


const obj2 = {exemplo: 'exemplo 2'}

obj1.mostrathis.call(obj2)

//Exemplo de funcao usando o metodo call


const a = {exemplo: 'apply 1', mostrApply: function (){
    console.log(this)
}}

a.mostrApply()

const b = {exemplo: 'apply 2'}

a.mostrApply.apply(b)
//Exemplo usando o apply
//Os dois metodos tem a mesma sintaxe, porem quando for passar parametros o metosdo (call()) aceita parametros em forma de lista, enquanto o metodo (apply()) aceita os parametros em forma de array