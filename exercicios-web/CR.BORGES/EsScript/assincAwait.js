//usando asincAwait com promisses
const http = require('http')

const getTurma = (letra)=>{
    const url=`http://files.cod3r.com.br/curso-js/turma${letra}.json`
        return new Promise((resolve,reject)=>{
            http.get(url, res=>{
                let resultado = ''
                res.on('data',dados=>{
                    resultado+=dados
                })
                res.on('end',()=>{
                    try{
                        resolve(JSON.parse(resultado))
                    }
                    catch(e){
                        reject(e)
                    }
                })
            })
        })
}

//recurso do ES8 
//objetivo de simplicar o uso de promisses
let obterAlunos = async()=>{ //para usaro o recurso de awayt o codiugo tem que estar num bloco assincrono
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA,turmaB,turmaC)    
}//esse codigo vai retornar um objeto do tipo AsyncFunction

//com os dados dentro do objeto eu posso chamar o then e dar o tratamento que eu desejar 
obterAlunos()
.then(alunos=> alunos.map(a=> a.nome))
.then(nomes => console.log(nomes))
