//na function declaration a funcção pode ser usada antes mesmo de ser declarada 
console.log(soma(3,4))
//essa ai não funciona pois ela so vai existir depois da variavel dela ser declarada
//console.log(subtracao(4,3))
// forma tradicional - function declaration
function soma (x,y) {return x + y }
//declarar uma funcao anonima e atribuir a uma variavel - function expression 
const subtracao = function (x,y) {return x -y }
//declarar uma funcao nomeada que esta vinculada a uma variavel é pouco usada - named expression function
const multiplicacao = function multiplicacao(x,y){return x * y}