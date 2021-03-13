console.log(module.exports === this)
console.log(module.exports === exports)
this.a=1
exports.b=2
module.exports.c=3

exports=null //mudei a referencia de exports para null
console.log(module.exports)//nada mudou no module.exports
exports ={nome: 'Testes'}//tentei setar coisa via o exports 
console.log(module.exports)//module.exports continua o memso
//o que vai exportar coisa do seu modulo para fora somente o module.exports
console.log(module.exports)
module.exports= {publico: true}
//sempre usar o modulo.exportes para exportar coisas somene vem nele as coisas
//this e exports são apenas referencias para modulo.exports
