function gerarNumerosEntre(min, max,numerosProibidos){
    if(min >max){  [max,min] =[min,max] } // se mimnimo maior que maximo eu tenho que invertes os valores de mim e maximo
    return new Promise((resolve, reject)=> {
        const fator = max - min + 1
        const aleatorio =Math.floor(Math.random() * fator ) + min;
        if(numerosProibidos.includes(aleatorio)){
            reject('Número repetido')
        }
        else {
            resolve (aleatorio)
        }
    })
}



async function gerarMegaSena(qtdeNumeros,tentativas=1){
    try {
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if(tentativas > 100) {
            throw "Não foi possivel gerar os numeros, tente novamente mais tarde!"
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}


gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)