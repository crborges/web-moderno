/*
2 formas de chamr uma funçõa usando call e apply
como todo função js é um tipo ela tem essas possibilidades

 */
function getPreco (imposto =0, moeda= 'R$'){
    return `${moeda} ${this.preco * (1-this.desc)*(1+imposto)}`
}
     
const produto ={
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

//chamando o get preço direto aii preiso setart os valores no escopo global para ele se achar 
global.preco=20
global.desc=0.1
console.log(getPreco())
//chamando a partir de um objeto ele acha os valores
console.log(produto.getPreco())

//usando o call ou apply em que eu passo qiual o contexto que a funcçãod eve ser executada
const carro = {preco: 50000, desc : 0.20}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))


//Call com passagem de parametros , primeiro o contexto de execução e depois os parametros
console.log(getPreco.call(carro, 0.17, '$'))

//Apply com passagem de parametros , primeiro o contexto de execução e depois os parametros dentro de um array
console.log(getPreco.apply(carro, [0.14, '€']))

