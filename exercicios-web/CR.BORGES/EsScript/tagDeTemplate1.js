// tag de template -- proessar uma tempalte string dentro de uma função

function tag(partes, ...valores){//trenho 2 arrays dentro dessa funcção o array de partes(o que nãoe sta interpolado) e o array de valores(está interpolado)
    console.log(partes)
    console.log(valores)
    return 'Outra string';// isso é oq que vai ser impresso no console que é algo totalmente diferente
}

const aluno =  'Cristiano'
const sitacao='Aprovado'
console.log(tag `${aluno} está ${sitacao}.`) //passei uma tempalte string para ser procesada pela funcção tag que vai alterar e retornar um valor diferente 


