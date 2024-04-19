/*Estrutura de repeticao while.
Laco simples
Estrutura com teste logico no inicio. Primeiro testa depois executa o bloco
*/
var cont = 1
while (cont <=6){
    console.log('tudo bem?')
    cont++
}

/*Estrutura de repeticao do While
Estrutura com teste logico no final. Primeiro executa o bloco e depois testa
*/
var c = 1
do{
    console.log(`Passo ${c}`)
    c++
}while(c <=6)

/*Estrutura de repeticao For
Estrutura mais simplificada.
*/

for(var num =1; num<=50;num++){
    console.log(`${num}`)
}