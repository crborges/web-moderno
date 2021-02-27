const ModuloA = require('../../moduloA')
console.log(ModuloA.ola)

const moduloC = require('./pastaC')//ele importou assim porque esta procurando o arquivo index de modulo pastaC
console.log(moduloC.ola2)
//chamando um modulo do core do node(modulo http)

const http = require('http')
http.createServer((req,res)=>{
    res.write('Bom dia')
    res.end()
}).listen(8081)
