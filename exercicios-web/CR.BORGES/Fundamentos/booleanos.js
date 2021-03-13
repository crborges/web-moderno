
let isAtivo= false
console.log(isAtivo)//padrão falso
isAtivo=true;
console.log(isAtivo)//padrão veradeiro
isAtivo=1
console.log(!!isAtivo)//para saber se o valor 1 é verdadeiro
console.log(!true)//para nega algo
console.log(!!true)//para saber o valor booleano de algo 
console.log('verdadeiros estranhos')
console.log(!!3)//forçar que o numero 3 se torne verdadeiro
console.log(!!-1)//forçar que o numero -1 se torne verdadeiro
console.log(!!' ')//forçar que uma string  se torne verdadeiro
console.log(!!'teste')//forçar que uma string se torne verdadeiro
console.log(!![])//forçar que um array vazio verdadeiro
console.log(!!{})//forçar que um objeto vazio se torne verdadeiro
console.log(!!Infinity)//forçar que o tipo infinito se torne verdadeiro
console.log(!!(isAtivo=true))//forçar que algum valor resolvido para verdadeiro seja verdadeiro

console.log('Falsos estranhos')
console.log(!!0)//Zero que significa falso
console.log(!!'')//String vazia que é falso
console.log(!!null)//null resolve falso
console.log(!!NaN)//Nan resolve falso
console.log(!!undefined)//undefined resolve falso
console.log(!!(isAtivo=false))//atribuição que resolve para falso resolve falso
console.log('resultado de uma operação de verdadeiro ou falso')
console.log(!!( '' || null || 0  || 'Epa'))//uma expressão interia ele resolve e aparece o resultado (ao menos 1 é verdadeiro)



