//condicoes simples
var pais = 'Brasil'
if(pais == 'Brasil'){
    console.log('Voce e brasileiro')
}


//condicoes compostas
var id = 18
if (id < 18){
    console.log('Voce nao pode entrar na balada')
}else{
    console.log('Voce pode entrar na balada')
}


//condicoes aninhadas
var idade = 20
if (idade < 16){
    console.log('Nao vota')
}else if(idade < 18){
    console.log('Voto opcional')
}else if(idade >= 67){
    console.log('voto nao obrigatorio')
}else{
    console.log('Voto obrigatorio')
}

//Condicao multipla
var now = new Date()
var diasem = now.getDay()
switch (diasem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terca')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6: 
    console.log('Sabado')
        break

}



/*Para pegar hora do dia crie uma variavel
 Ex:
 var agora = New Date()
 e chame ela onde voce quer executar
 Ex:
 var hora = agora.getHours()
 */