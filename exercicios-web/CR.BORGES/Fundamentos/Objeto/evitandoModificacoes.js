//object.preventExtensions --> não pdoe colocar mais atributos num objeto
const produto =Object.preventExtensions({
    nome: 'Qualquer', preco:'1,99', tag: 'promocao'
})
console.log('Extensivel: ',Object.isExtensible(produto))

produto.nome='Borracha'
produto.descricao='Borracha escolar Branca'// não surrte nenhmefeito poisão posso pro mais atributos
delete produto.tag//não poos por  amais mas posso delear um existente
console.log(produto)

//Object.seal não cosnegue nem isnerir nem tirar atributos do objeto sómexer nos valors existente
const pessoa ={ nome: 'Juliana',idade: 35}
Object.seal(pessoa)
console.log('Selado',Object.isSealed())

pessoa.sobrenome = 'Silvia'//não surte efeito popis nao poss colocar nada
delete pessoa.nome//não surte efeito
pessoa.idade=29//alterar valores ok
console.log(pessoa)

//Object.freeze não tem como mexer nos atributos(tirarou colocar)e nem nso valores do objeto o objeto é estatico

