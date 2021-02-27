//Arow function
const soma = (a,b) => a+b 
//ter uma sintaxe mais simples e funções de uma só linha 
// quando não se tem o return ele chama implicitamente 
// tu não pode dar umm noem para ela, tem que criar uma variavel para ser usada de referencioa e chama a fucção pela variavel
//quando se tem só um parametro não precisa colocar os parenteses
//quando colocar um corpo tem que colcoar um return  o corpo seria um bloco
console.log(soma(2,3))

const lexico1= ()=> console.log(this===exports)//this sempre aposnta para global 
const lexico2= ()=> lexico1.bind({})    // nao vai adiantar forcar que o theus receba um bind de alguma coisa nova que ele não vai perder o escopo original
lexico1()
lexico2()
//quando se  tem uma fucnção tradicional eu consigo mudar o contexto do this ele só é imutaovekl nuam funcção arow





//parametro default
function log(texto = 'node'){ // se nada for passado em texto ele asume o valor padrão node
    console.log(texto)
}

log()//colocando nada assiume o vlaor padrão
log(undefined)//colocando undefined assume o valor padrão
log(null) // null ele não asume o valor padrão
log('Cristiano')// colocando um valor ele assume este valor 





//operador rest
function total(...numeros){ //um agrupador de parametros aqui eu não sei quantos parametros eu vou passar poque a valiriavel ...numeros é um array de valores
    let total =0
    numeros.forEach(n=>total+=n)//funçaõ foreach que vai somar todos so valores passados para a função
    return total
}
//eu passei os valores espalhados e o js juntou todos eles na variavel ...numeros em forma de um array

console.log(total(1,2,3,4,5))
