//MAPEAR O ARRAY PARA UM NOVO ARRAY FAZENDO UMA TRANSFORMAÇÃO NOS DADOS DO ARRAY ORIGINAL
const nuns = [1,2,3,4,5]
//o map é um for com proposito
let resultado= nuns.map(function(e){ //mapeia uma função par ao array
    return e*2 //para cada elemento do array original vai apresentar um que é o dobro
})//o resultado é se,mpre um array do mesmo tamanho do original(so transormado)
//map não mexe no array original

console.log(resultado)

const soma10 = e => e+10//uma arow function que soma 10 num elemento
const triplo = e =>e*3 //uma arow function que retorna o triplo de valor 
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` //pega um valor float coloca o cifrao de real faz ele ter somente 2 casas decimias e troca o . por, 

resultado = nuns.map(soma10).map(triplo).map(paraDinheiro)//soma 10 ao valor passado depois faz o tirplo do valor para depois converter em dinheiro console.log(resultado)
console.log(resultado)//apresenta o resultao sucessivo da transformação