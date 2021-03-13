
function lerArqivo(path){
    return new Promise(resolve=> {
        let fs = require('fs')
        fs.readFile(path, 'utf-8',function(err,data){
            if(err)throw err
            resolve (data.toString())  
        })
    })
}

lerArqivo(__dirname+"/dados.txt")
    .then(conteudo=> conteudo.split('\n'))
    .then(conteudo => console.log(conteudo[0]))
   // .then(conteudo=> console.log(conteudo.length()))