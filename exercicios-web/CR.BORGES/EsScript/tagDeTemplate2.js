//exemplo vai fazer um parse nas variaveis intewrpoladas e criar um mascara de dinheiro nelas

function real(partes, ...valores){//coleta os valores e transforma os valores interpolados do codigo em dinheiro 
    const resultado=[]
    valores.forEach((valor, indice) => {
        valor = isNaN(valor)? valor: `R$ ${valor.toFixed(2)}`
        resultado.push(partes[indice],valor) 
    })
    return resultado.join('')
}

const preco= 29.8975
const precoParcela=11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)