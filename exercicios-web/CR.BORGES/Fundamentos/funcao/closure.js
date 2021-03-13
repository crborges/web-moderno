// closure é o escopo criado quando voce cria uma função
//esse escopo permite voce acessar e manipular variaveis externas à funcao
const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro 
}

const minhaFuncao = fora()
console.log(minhaFuncao())