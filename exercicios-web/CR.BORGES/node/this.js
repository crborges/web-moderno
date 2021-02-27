console.log(this===global)
console.log (this===module)

console.log(this===module.exports)//isso si é o this do node
console.log(this===exports)//exportes ponta para module.exports

function logThis(){
    console.log("valor de this muda dentor de uma função")
    console.log(this===exports)//nesse escopo this não aposta para exports
    console.log(this===module.exports)
    console.log(this===global)//dentra da funcção this acessa global
}

logThis()