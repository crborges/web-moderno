//Como uma classe 
class pessoa {
    constructor (nome){
        this.nome=nome
    }
    falar (){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new pessoa('João') 
p1.falar()


//como uma funcão arow
const criarPessoa = nome =>{
    return {
        falar:  () =>console.log(`Meu nome è ${nome} `)
    }
}
const p2 = criarPessoa('André')
console.log(p2.falar())