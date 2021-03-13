const nome="mariana"
const concatenacao = "Olá "+nome+"!"
const template = ` 
Olá 
${nome} !`

console.log(concatenacao);// concatenação simples
console.log(template);//concatenação com tempalte string que ele considera as quebras de linha etc...
console.log(`1 + 1 = ${1+1}`) // tempalte string com expressão 


const up = texto => texto.toUpperCase()//crio uma função inominada para passar a função para um tempalte string
console.log(`Ei... ${up('cuidado')}!`)