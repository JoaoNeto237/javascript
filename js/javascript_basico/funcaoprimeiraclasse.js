//Funcao sendo atribuida a uma variavel
const foo = function(){
    console.log('footbar');
}
foo();

//Funcao sendo passada como parametro dentro de outra funcao

function dizOla(){
    return 'Ola, '
}
function apresentacao(funcaoMensagemOla, nome){
    console.log(funcaoMensagemOla() + nome);
}
apresentacao(dizOla, "JavaScript");


//Funcao que retorna outra funcao

function print(){
    return function(){
        console.log("BRDev!");
    }
}

//Chamando a funcao que retorna outra funcao por meio de atribuicao a variavel

const func = print();
func();

//Chamando a funcao que retorna por meio do uso de parenteses duplos 

print()();