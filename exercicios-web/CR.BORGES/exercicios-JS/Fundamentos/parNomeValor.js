//par nome/valor

const saudacao = 'Opa' //contexto léxico 1

function exec(){
    const saudacao ='Falaaaaaa' //contexto lexico 2
    return saudacao 
}
//obejtos são grupos aninhados de pares nome/valor

const cliente ={
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro :   'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao) //saudacao no primeiro contexto
console.log(exec()) //saudacao no segundo contexto
console.log(cliente)//imprime cliente