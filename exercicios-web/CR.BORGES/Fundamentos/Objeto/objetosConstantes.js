// pessoa -> 123 ->{...}
const pessoa = {nome: 'João' }
pessoa.nome='Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pesoa ={nome:'Ana'}


//o frreze bloquia o objeto não tem como mais mexer em nada 
Object.freeze(pessoa)
pessoa.nome='Maria'
pessoa.nome='Rua ABC'
delete pessoa.nome
console.log(pessoa)

//criando um objeto já constante
const pessoaConstante=Object.freeze({nome: 'João'})
console.log(pessoaConstante)