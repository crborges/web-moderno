//criar uma funao que nao recebe parametros e passar parametros e recuperar o valor desses parametros
//posso recuperar o valor dos parametros atraves de arguments
function soma (){
    let soma = 0
    for (i in arguments){
        soma+=arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(2,2))
console.log(soma(2,2,2,2,2,2))
console.log(soma("string 01 ","string 02 ","string 03 ","string 04 "))//passando so strings ele fucnioan pois vai concatenar elas