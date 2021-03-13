//novo recruso após o ES6 DE 2015
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min//tira um valor aletorio entre mim e max
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 } //cria o objeto a passarpara a função
console.log(rand(obj))
console.log(rand({ min: 955 }))// so o minimo
console.log(rand({}))//sem passar nada (entre 0 e 1000)
//console.log(rand())

