/*faca um programa que leia e valide as seguintes informacoes:
Primeiro Nome: Maior que 3 caracteres;
 Idade: entre 0 e 120;
 Salario: maior que zero;
 Sexo: 'f' ou 'm';
 Estado Civil: 's', 'c', 'v', 'd'*/
 
var nome = prompt('Digite seu nome (Pelo menos 3 caracteres): ')
while(nome.length < 3){
    var nome = prompt('ERRO! Por favor, digite um nome valido.')
}
var idade = prompt('Digite sua idade (Entre 0 e 120):')
var validar = false
while(validar == false){
    if (idade > 120){
    var idade = prompt('ERRO! Por favor, digite uma idade valida.')}else{
        validar = true
    }
    }
var salario = prompt('Digite seu salario (Deve ser maior que 0):')
while(salario <=0){
    var salario = prompt('ERRO! Digite um salario valido')
}
var sexo = prompt('Digite seu sexo (m ou f): ').toLowerCase()
while(sexo != 'm' && sexo != 'f')
var sexo = prompt('ERRO! Digite um sexo valido.').toLowerCase()
var estadoCivil = prompt('Digite seu estado civil (s: solteiro, c: Casado, v: Viuvo, d: divorciado').toLowerCase()
while(estadoCivil != 's' && estadoCivil != 'c' && estadoCivil != 'v' && estadoCivil != 'd'){
    var estadoCivil = prompt('ERRO! Digite o seu estado civil valido: ').toLowerCase()
}

document.write(`Ola, ${nome}, com ${idade} anos, sexo ${sexo}, salario de ${salario}, estado civil ${estadoCivil}`)






