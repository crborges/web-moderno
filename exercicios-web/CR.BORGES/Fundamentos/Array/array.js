console.log(typeof Array , typeof new Array,typeof [])
let aprovados = new Array('Bia','Carlos','Ana') 
console.log(aprovados)
aprovados =['Bia','Carlos','Ana']
console.log(aprovados[0])//visualiza item d uma posição
console.log(aprovados[1])//visualiza item d uma posição
console.log(aprovados[2])//visualiza item d uma posição
console.log(aprovados[3])//se nao tem item na posição mostra undefined

aprovados[3]='Paulo' //adiciona um ite,m pela chave
console.log(aprovados[3])//visualiza item de uma posição
aprovados.push('fernando')//insete um item no array
console.log(aprovados.length)//mostra o tamanho do atrray
aprovados[99]='Rafael'// insere um item numa paosição e deixa gvagas toda as ´psiçõe snetre o ultimoe  o adicionado
console.log(aprovados.length)//mostra tamanho do array
console.log(aprovados[8]===undefined)//ve se tem algu numa determina psosição
console.log(aprovados)//mostra o array na tela
aprovados.sort()//ordena o array 
console.log(aprovados)//mostra o array ordenado

delete aprovados[1]//deleta um item do array em uma posição
console.log(aprovados[1])//mostra item de uma posição
console.log(aprovados[2])//mostra item de uma posição

aprovados =['Bia','Carlos','Ana']//redefine os itens do array
aprovados.splice(1, 1)//indice a trabalhar e quantidade de elementos a trabalhar
console.log(aprovados)//imprime o aarya novamente