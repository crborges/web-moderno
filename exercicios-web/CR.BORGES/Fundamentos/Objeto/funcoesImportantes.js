const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso:13
}

console.log(Object.keys(pessoa))//pega as chaves de um objeto
console.log(Object.values(pessoa))//pega os valores de um objeto
console.log(Object.entries(pessoa))//pega vaores chae valor

Object.entries(pessoa).forEach(([chave,valor]) => { //umaforma de iterar um array com entries e foreach
    console.log(`${chave}: ${valor}`)
});

//posso setar a propriedade do jeito que eu quiser
Object.defineProperty(pessoa, 'dataNascimento', {//insere um campo num objeto mas definindo propriedade a este campo 
    enumerable: true,//pode ser enumerada
    writable: false,//não pode ser reescrita
    value: '01/01/2019'//valor default
})

pessoa.dataNascimento = '01/01/2017' //tenta setar um valor diferente no objweto não writable
console.log(pessoa.dataNascimento)//vai mostar o valor original
console.log(Object.keys(pessoa))//nas keyus do objeto vao estar todos os campos lá 

//object.assign (ecma script 2015)
const dest = { a: 1 }           //vai contenando obejtos 
const o1 = { b: 2 }             //vai pegando os atributos de cada objet e vai colocando dentro do obejto de destino, sobrescrevendo os dados que já existem
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) //no caso do a ele vai mostar o ultimo valor setado para o a

Object.freeze(obj)//congela o objeto 
obj.c = 1234
console.log(obj)