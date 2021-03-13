function Carro (velocidadeMaxima=200, delta =5){
 let velocidadeAtual=0
 this.acelerar = function(){
    if (velocidadeAtual + delta <= velocidadeMaxima) {
        velocidadeAtual += delta
    } else {
        velocidadeAtual = velocidadeMaxima
    }

 }
 this.getVelocidadeAtual = function (){
     return velocidadeAtual
 }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())



const ferari = new Carro(350,20)
ferari.acelerar()
ferari.acelerar()
ferari.acelerar()
ferari.acelerar()
ferari.acelerar()
console.log(ferari.getVelocidadeAtual())