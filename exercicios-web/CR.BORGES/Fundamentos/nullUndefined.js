const a={name: 'teste'} //a aaponta paraum enderço x de memoria
const b =a //criei b apontando para o mesmo endereço
b.name='opa' //se altewrar via b o objeto a vai ser alterado pois estou apontando para om emsmo endereço
console.log(b)
console.log(a)
let c=3 //esse apontamento não funciona para tipos primitivos
let d=c
d++
console.log(d)
console.log(c)


let valor//nem 
console.log(valor)
valor =null
//console.log(valor2)
console.log(valor)
//console.log(valor.toString())//não tem como acessar to string de um objeto nulo
const produto ={}
console.log(produto.preco)//apresar de não ter uma definição de preço não da erro 
console.log(produto)
produto.preco=3.50
console.log(produto)//criei uma definição de preço para o produto 
produto.preco=undefined//evitg atribuir undefined aqui é só para testar
console.log(produto)