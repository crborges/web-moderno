const { promises } = require("fs")

function gerarNumerosEntre(min, max){
    if(min >max){  [max,min] =[min,max] } // se mimnimo maior que maximo eu tenho que invertes os valores de mim e maximo
    return new Promise(resolve=> {
        const fator = max - min + 1
        const aleatorio =Math.floor(Math.random() * fator ) + min;
        resolve (aleatorio)
    })
}


gerarNumerosEntre(1,60)
    .then(num=> num *10)
    .then(numx10 => `O número gerado foi ${numx10}`)
    .then(console.log)
