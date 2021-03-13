
const url='http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios= require('axios')


const ehChina = f => f.pais ==='China'
const ehmulher = f => f.genero ==='F'

const menorSalario=(func,funcAtual)=> {
    return func.salario < funcAtual.salario ?func : funcAtual
}


axios.get(url).then(response=>{




    
    const funcionarios=response.data
    //console.log(funcionarios)

    
    const func = funcionarios
    .filter(ehChina)
    .filter(ehmulher)
    .reduce(menorSalario)
    console.log(func)
})




