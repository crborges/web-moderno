//usando anotacao literal - forma 1
const obj1={}
console.log(obj1)

//object em js - forma 2
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funcoes construtoras - forma 3
function Produto (nome,preco,desc){
    this.nome=nome //visibilidade publica
    this.getPrecoComDesconto=()=>{
        return preco*(1-desc)//preco é privade estas dentro do objeto
    }
}
const p1 = new Produto('Caneta',7.99,0.15);
const p2 = new Produto('Notebook',2998.99,0.25);
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())


//funcao factory - forma 4
function criarFuncionario(nome,salarioBase,faltas){
   return {
       nome,
       salarioBase,
       faltas,
       getSalario(){
           return (salarioBase/30)*(30-faltas)
       }
   } 
}
const f1 = criarFuncionario('João',7980,4)
const f2 = criarFuncionario('Maria',11400,1)
console.log(f1.getSalario(),f2.getSalario())


//object.create - forma 5
const filha=Object.create(null)
filha.nome='Ana'
console.log(filha)




//uma fucnção que transofrma josnem objeto - forma 6
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)