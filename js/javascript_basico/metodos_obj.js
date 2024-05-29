const origem = {a: 1, b: 2};
const destino = {a: 4, b: 5};

const destinoRetornar = Object.assign(destino, origem)

// Esse metodo o valor do segundo parametro copia , assinala o valor para o primeiro parametro.  

console.log(destinoRetornar, destino)

//Clonagem de objetos

const obj = {a: 1};
const copia = Object.assign({}, obj)
//Nesse caso o objeto copia o objeto para um objeto que ate o momento nao existia

//Mesclagem de objetos

const o1 = {a:1};
const o2 = {b:2};
const o3 = {c:3};

const ob = Object.assign({},o1,o2,o3);

//Todos os objetos vao ser mesclados e serem juntados em ob

console.log(ob, o1);//Tem que passar alem da constante ob que recebe o valor dos objetos, o primeiro objeto que for passado no assign

//Metodo que transforma arrays em objetos

const arrayEntrada = [
    ['abc', 2] ,
    ['def', 4]
];

const objeto = Object.fromEntries(arrayEntrada);

console.log(objeto)

//Metodo que transforma um objeto em array

const objetoEntrada = {
    'abc': 2,
    'def':4
};

const objet = Object.entries(objetoEntrada);

console.log(objet)


//

const objc ={100: 'a', 2: 'b ', 5: 'c'};

const keys = Object.keys(objc);//Transforma em um array e acessa as chaves somente

const values = Object.values(objc);//Transforma em um array e acessa os valores somente

console.log(keys);
console.log(values);


