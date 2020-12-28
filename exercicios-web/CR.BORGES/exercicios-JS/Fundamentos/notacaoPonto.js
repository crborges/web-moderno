console.log(Math.ceil(6.1))

const obj1= {}
obj1.nome='Bola'//usando operador ponto
//obj1['nome']= 'Bola2' //usando operador de colchetes
console.log(obj1)

function Obj(nome){
    this.nome= nome//Criei um OBJ com function e disponibilizei o parametro nome
    this.exec = function(){//disponibilizei uma funcão chamada exec
        console.log('Exec... ')
    }

}

const obj2 = new Obj('Cadeira') //criei um new Obj e pasei como nome cadeira
const obj3 = new Obj('Mesa')    //criei um new Obj e pasei como nome mesa
console.log(obj2.nome)          //acessando o atributo nome do OBJ
console.log(obj3.nome)          //acessando o atributo nome do OBJ
obj3.exec()                     //acessando a função exec do OBJ
