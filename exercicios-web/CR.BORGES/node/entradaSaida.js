//pegar um parametro pelo terminal ai a chamada tem que ser node entradaSaida.js -a
const anonimo = process.argv.indexOf('-a')!== -1
//console.log(anonimo)
if(anonimo){ //se recebi o paraemtro -a vou escrever na saida padrçao do console
    process.stdout.write('Oi anonimo\n')
    process.exit()
}
else {
    process.stdout.write('Informe seu nome:')//pede na tela para vc escrever o seu nome 
    process.stdin.on('data', data=>{//crio uma função apr apedir ao usuario que  escreva o seu nome
        const nome = data.toString().replace('\n', '') //retira o enter escrito
        process.stdout.write(`Fala ${nome}!! \n`)//da oi para quem escreveu seu nome
        process.exit()
    })
}