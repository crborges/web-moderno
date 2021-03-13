const pilotos =['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop()//tira o ultimo elemento do array
console.log(pilotos)
pilotos.push('Verstapen')//insre um elemento da lista
console.log(pilotos)
pilotos.shift()//remove o primeiro elemento da lista
console.log(pilotos)
pilotos.unshift('Hamilton') //coloca um elemento na priemri aposição do aray
console.log(pilotos)
//splice que remove ou insere itens
pilotos.splice(2,0,'Bottas','Massa')//a partir do indice 2 não vou tirarnenhum elemento e vou colcoar mais 2(escrevi aliquem eram eles)
console.log(pilotos)
pilotos.splice(3,1)//a apartir do indice 3 vou tirar 1 eklelemto
console.log(pilotos)
const algunsPilotos= pilotos.slice(2)//pegarei um pedaco no caso pego um pedacao partir do indeice 2 como nao coleoquei tamanho ele vai pegar todos 
console.log(algunsPilotos)
const algunsPilotos2 = pilotos.slice(1, 4) //pegarei da posição 1 mmais 4 elementos 
console.log(algunsPilotos2)