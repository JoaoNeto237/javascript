let nivelGlobal = 'Nivel Global';
let nivel1 = undefined, nivel2 = undefined, nivel3 = undefined;

function funcaoNivel1(){
    let nivel1 = 'Nivel 1'

    function funcaoNivel2(){
        let nivel2 = 'Nivel 2'


        function funcaoNivel3(){
            let nivel3 = 'Nivel 3'
            console.log(`\n Funcao nivel 3 resultados: \n ${nivelGlobal} \n${nivel1} \n${nivel2} \n${nivel3}`)
        }
        funcaoNivel3()

        console.log(`\n Informamos que nivel 2 resultados: \n ${nivelGlobal} \n ${nivel1} \n ${nivel2} \n ${nivel3 ? nivel3 : 'nivel inacessvel'} `)
    }
    funcaoNivel2()

    console.log(`\n Informamos que nivel 1 resultados: \n ${nivelGlobal} \n ${nivel1} \n ${nivel2 ? nivel2 : 'nivel inacessivel'} \n ${nivel3 ? nivel3 : 'nivel inacessvel'} `)

}
funcaoNivel1()
/*As funcoes so conseguem acessar as funcoes de escopo local se tiverem funcoes aninhadas. E como no exempolo , elas so conseguem acessar as variveis que foram criadas antes delas. Ex: a funcao nivel 3 consegue todos os valores pois foi criada por ultimo, ja a funcao nivel 2 consegue pegar o valor da variavel dela mesma e de nivel 1 e global. E a funcao de nivel 1 so consegue pegar o valor de sua propria variavel e variaveis globais */