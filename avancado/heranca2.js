class Dev {
    constructor(nome, idade, principalLinguagem, tipoDeDev) {
        this.nome = nome;
        this.idade = idade;
        this.principalLinguagem = principalLinguagem;
        this.tipoDeDev = tipoDeDev;
    }

    saudacao() {
        console.log(`Ola! Sou dev ${this.tipoDeDev}, trabalho com ${this.principalLinguagem} e me chamo ${this.nome}`);
    }
}

class Frontend extends Dev {
    constructor(nome, idade, principalLinguagem, framework) {
        super(nome, idade, principalLinguagem, "frontend");
        this.framework = framework;
    }
}

class Backend extends Dev {
    constructor(nome, idade, principalLinguagem, bancoDeDados) {
        super(nome, idade, principalLinguagem, "backend");
        this.bancoDeDados = bancoDeDados;
    }
}

// Criando instâncias
const frontend1 = new Frontend("Mario", 27, "javascript", "vue");
const backend1 = new Backend("Marcio", 20, "java", "mongoDB");

console.log(frontend1);
frontend1.saudacao();
console.log(backend1);
backend1.saudacao();
