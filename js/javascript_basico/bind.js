function ThisBind(){
    console.log(this)
}

const obj = {exemplo: 'exemplo'}

//O metodo bind() nesse exemplo esta unindo o objeto (obj) a funcao

//Se usar 'use strict' vai apontar para undefined. Quando nao usado o this aponta para o objeto mais global possivel.

ThisBind = ThisBind.bind(obj);

ThisBind()