const fs =require('fs')
const produto={
    nome:"Celular",
    preco:1249.99,
    desconto: 0.15
}

fs.writeFile(//para escrever um arquivo eu passo como parametros 1 - onde o arquivo vai ficar, 2 - o que vai ser escrito e recebo de retorno da funcção um erro que retorna o erro se ocorrer

    __dirname+'/arquivoGerado.json',
    JSON.stringify(produto),
    err=>{console.log(err ||'Arquivo salvo!')}
)