function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)//os prototypes dos 2 são exatamente iguais
console.log(MeuObjeto.prototype === obj1.__proto__)// o prototype de meu obejte == ao prototype de qq objeto craido por new a aparitr dele 

MeuObjeto.prototype.nome='Anônimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! meu noemn é ${this.nome}`)
}
obj1.falar()

obj2.nome=  'Rafael'

const obj3 ={}
obj3.__proto__=MeuObjeto.prototype
obj3.nome='Obj3'
obj3.falar()

//RESUMINDO algumas sentenças verdadeiras
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
