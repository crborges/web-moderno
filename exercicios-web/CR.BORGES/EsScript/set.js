//estrutura que não aceita repetições e que não é indexada
const times = new Set()
times.add('Vasco')//uma chamada simples
times.add('São paulo').add('Palmeiras').add('Grêmio')//aceita chamadas de inserção encadeadas
times.add('Flamengo')
times.add('Vasco')//esse vasco aqui ele vai simplesment eignorar porque ja faz parte do ser
console.log(times)
console.log(times.size)//consigo ter a quantodade eelementod o set
console.log(times.has('Grêmio'))//verificar se existe um elemento no set
times.delete('Flamengo')//excluir um element do set
console.log(times.has('Flamengo'))//falso porque tirei o flamengo
console.log(times)


//criar um seto de um array
const nomes = ['Raquel','Lucas','Julia','Lucas']
const setNomes= new Set(nomes)//criando um set a aprtir do array nomes
console.log(setNomes)//lucas  que é repedido so tem uma vez que é o ultimo inserido
