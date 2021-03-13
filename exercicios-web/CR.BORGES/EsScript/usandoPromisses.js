//usando promises ao inves de callback
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
                    //callback(JSON.parse(resultado))
                })
            })
        })
}


//esse codigo com callback ficou estranho de entender
let nomes =[]


/* forma antiga usando os callbacks aliunhando s
getTurma('A').then(alunos =>{
    nomes= nomes.concat(alunos.map(a=> `A: ${a.nome}`))
    console.log(nomes)
    getTurma('B', alunos=>{
        nomes= nomes.concat(alunos.map(a=> `B: ${a.nome}`))
        console.log(nomes)
        getTurma('C', alunos=>{
            nomes= nomes.concat(alunos.map(a=> `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})
*/
Promise.all([getTurma('A'),getTurma('B'),getTurma('C')]) //Chamo varias promisses ao mesmo tempo quando elas forem resolvidas elas todas retornam
.then(turmas => [].concat(...turmas))//vou concatenar os 3 arrays de turmar num unico array
//.then(x=> console.log(x))// eu imprimo o que as promisies retornaram (os objetos das turmas)
.then(alunos=> alunos.map(aluno => aluno.nome))//mapeio o nome do aluno para a um variavel aluno
.then(nomes => console.log(nomes))//imprimo os momes dos alunos

getTurma('D').catch(e=> console.log (e.message))