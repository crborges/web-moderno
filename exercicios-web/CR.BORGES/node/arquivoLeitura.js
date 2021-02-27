const fs =require('fs')

const caminho=__dirname+'/arquivo.json'


//de forma sincrona
const conteudo= fs.readFileSync(caminho,'utf-8')
console.log(conteudo)

//de forma assincrona
fs.readFile(caminho,'utf-8',(err,conteudo)=>{//como é de forma assincrona assim que eu receber o arquivo eu executo uma callback
   const config=JSON.parse(conteudo)
   console.log(`${config.db.user}@${config.db.pass}/${config.db.host}:${config.db.port}`) 
})

//lendo de forma mais direta
const config = require('./arquivo.json')
console.log(config.db)

//lendo um diretorio
fs.readdir(__dirname,(err,arq)=>{//__dirname constante que represnete o diretorio atual
    console.log('o conteudo da pasta atual é')
    console.log(arq)

})