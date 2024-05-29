function Ventilador(velMax){
    this.velocidadeMaxima = velMax;
    this.ligado = false
}

const ventilador1 = new Ventilador(3)

ventilador1.cor = 'Branco'

ventilador1.ligaDesliga = function(){
    if(this.ligado){
        this.ligado = false
    }else{
        this.ligado = true
    }
}

ventilador1.ligaDesliga()
console.log(ventilador1.ligado)
ventilador1.ligaDesliga()
console.log(ventilador1.ligado)

console.log(ventilador1)