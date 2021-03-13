//novo recruso após o ES6 DE 2015
function rand([ min = 0, max = 1000]) {
    if(min>max) [min,max] = [max,min]//se minimo é maio que maximo eu vou inverter os valores 
    const valor = Math.random() * (max - min) + min//tira um valor aletorio entre mim e max
    return Math.floor(valor)
}

const obj = [50, 40] //cria o objeto a passarpara a função
console.log(rand(obj))
console.log(rand([992]))// so o minimo
//console.log(rand({}))//sem passar nada (entre 0 e 1000)
//console.log(rand())

