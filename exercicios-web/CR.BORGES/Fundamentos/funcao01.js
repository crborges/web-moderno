function imprimirSoma(a,b){
    console.log(a+b)
}
imprimirSoma(2,3)
imprimirSoma(3)//posso pasar so um parametro se fizer isos nesse caso da Undefined somo a a bqueesta como undefined
imprimirSoma(2,10,5,6,69,3)//posso passar mais apraemtroq eu o esperado ele simplesemtne ignora os a  mais 
imprimirSoma()//posso não passar nada e elee define os parametros como undefined

//funcao com retorno
function soma(a, b=0){
    return a + b
}
console.log(soma(2,3))
console.log(soma(2))