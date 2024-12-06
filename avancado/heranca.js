 class Dev{
    constructor(nome, idade, principalLinguagem){
        this.nome = nome;
        this.idade = idade;
        this.principalLinguagem = principalLinguagem;
    }

    saudacao(){
        console.log(`Ola! Sou dev fulstack, trabalho com ${this.principalLinguagem} e me chamo ${this.nome}`);
    }
}

class Frontend extends Dev{
    constructor(nome, idade, principalLinguagem, framework){
        super();
        this.nome = nome;
        this.idade = idade;
        this.principalLinguagem = principalLinguagem;
        this.framework = framework;
    }

    saudacao(){
        console.log(`Ola! Sou dev Frontend, trabalho com ${this.principalLinguagem} e me chamo ${this.nome}`);
    }
}

class Backend extends Dev{
    constructor(nome, idade, principalLinguagem, bancoDeDados){
        super();
        this.nome = nome;
        this.idade = idade;
        this.principalLinguagem = principalLinguagem;
        this.bancoDeDados = bancoDeDados;
    }

    saudacao(){
        console.log(`Ola! Sou dev backend, trabalho com ${this.principalLinguagem} e me chamo ${this.nome}`);
    }
}

const frontend1 = new Frontend('Mario', 27, 'javascript', 'vue');
const backend1 = new Backend('Marcio', 20, 'java', 'mongoDB' );

console.log(frontend1);
frontend1.saudacao();
console.log(backend1);
backend1.saudacao();