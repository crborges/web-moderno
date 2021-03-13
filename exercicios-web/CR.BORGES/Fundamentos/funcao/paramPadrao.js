//estrategia 01 para passar valor padrão usando o operadro or
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log('estrategia 01')
console.log(soma1())//sem parametros
console.log(soma1(3))//com 1 parametro
console.log(soma1(1 ,2 ,3))//com todos os parametros
console.log(soma1(0 ,0 ,0))//se passar 0 o js entende que 0 é falso e ele vai setar 1 em todos 


//estrategia 02 ,03, 04 para passar valor padrão
function soma2(a,b,c){
    a = a !== undefined ? a : 1 //testa se a is undefined
    b = 1 in arguments ? b : 1 //testa se b existe in arguments
    c= isNaN(c) ? 1: c  //testa se c é um numero é amais segura 
    
    return a + b + c
}
console.log('estrategia 02, 03 e 04')
console.log(soma2())//sem parametros
console.log(soma2(3))//com 1 parametro
console.log(soma2(1 ,2 ,3))//com todos os parametros
console.log(soma2(0 ,0 ,0))//se passar 0 o js entende que 0 é falso e ele vai setar 1 em todos 

//Usando valor padrão do ES 6 -2015
function soma3(a=1,b=1,c=1){
    return a + b + c
}
console.log('Padrao ES6 - 2015')
console.log(soma3())//sem parametros
console.log(soma3(3))//com 1 parametro
console.log(soma3(1 ,2 ,3))//com todos os parametros
console.log(soma3(0 ,0 ,0))//se passar 0 o js entende que 0 é falso e ele vai setar 1 em todos 
