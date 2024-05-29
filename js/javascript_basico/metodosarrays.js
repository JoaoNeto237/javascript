//Criando arrays 

const meuArrayLiteral = [1, 2, 3]; // Forma litaral

const meuArrayConstutorInstance = new Array(1, 2 ,3);

const meuArrayConstutorCall = Array(1,2,3);

const meuArrayFrom = Array.from(meuArrayLiteral);

const meuArraySpread = [...meuArrayFrom];

//Metodoos de arrays
//Inserir e remover elementos das extremidades

const arr = [1, 8, 9];

arr.push(2); //insere elemento no final do array

arr.unshift(0); //insere elemento no inicio do array

arr.shift(); //Remove o primeiro elemento do array

arr.pop(); //Remove o ultimo elemento do array

//Remover elementos em qualquer ponto

const arrRemoveAnyPoint = [1,2,5,3];

arrRemoveAnyPoint.splice(1,2); //Remove qualquer numero indicado pelo indice e ate qual deseja ser desejado. Nesse exemplo o 1 indica que a remocao comeca no indice 1 ou seja o valor (2) e o numero 2 indica que vai ter 2 remocoes e vai remover ate o (5)


//Preencher um array com valores

const arr2 = new Array(10);

arr2.fill(5,1, 2)//Preenche o array com os valores passados. o numero 1 indica que vai preencher apartir do indice (1), e vai preencher com o valor (5) o numero (2) indica o fim


//Criar umsub array apartir de um array

const subArr = ["Brazil", "Developer", "JavaScript", "Python", " Node"];

const subArr2 = subArr.slice(2); //Vai fatiar o array


//Ordenar um array

const a = [10,12,3,4,5,6];
a.sort((a,b) => a - b); // Vai retornar o valor que for menor do que o outro na frente , assim independente de quantos valores retorna na ordem

a.sort(); //Ordena de acordo com o primeiro valor , assim pode ser que de algum problema

//Filter, find, foreach, map, reduce

const arrBase = [
    {a: 2, b : 2},
    {a: 1, b : 2},
    {a: 5, b : 2},
    {a: 1, b : 2},
    {a: 10, b : 2}
];

const filtered = arrBase.filter(el => el.a > b); //Filtra ate encontra um valor maior que 2 e retorna todos os valores que forem maiores do que 2

const find = arrBase.find(el => el.a == 10); //Encontra um unico valor e retorna

const forEach = arrBase.forEach(el => console.log(`a: ${el.a}. b: ${el.b}`)); //Nao retorna nada, faz uma acao para cada elemento ele faz uma acao. Nesse exemplo ele vai printar

const maped = arrBase.map(el => el.a += 1); //Mapear os valores e vai retornar os valores mapeados. no exemplo para cada elemento em a  incremente mais 1

const reduced = arrBase.reduce((acc, curr) => acc = acc + curr.a, 0); //acc = acumulador o valor que vai ser acumulado, curr = current valor atual. Vai reduzir o array ate retorna o menor valor . Somou todos os valores e reduziu em um unico valor o valor da soma de todos os valores.
