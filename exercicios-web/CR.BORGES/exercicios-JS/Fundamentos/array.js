const valores= [7.7, 8.9, 6.3, 9.2]
console.log(valores[0],valores[3])//mostra posição 0 e 3 do array
console.log(valores[4])//mostra posição que não existe
valores[4]=10//passou uma valor para o indice 4
console.log(valores);//lendo os valores do array com indice 4 inserido
valores[100]= 100
console.log(valores);//deixando uma parte de valores sem atribuião no array (ele vai dizerquem esta vazio)
console.log(valores.length)//tamanho do array
valores.push({id:3},false,null, 'teste')//inserir valrios valores no array
console.log(valores);//imprimindo os dados do novov array 
console.log(valores.pop())//pegao ultimo valor do array 
delete valores[100];//retira um valor do array
console.log(valores)//imprime o novo valor 
console.log(typeof valores)//imprime o tipo do array
