const porta = 3003
const express = require('express')
const bodyParer = require('body-parser')
const app = express()
const bancoDados = require('./bancoDeDados')


app.use(bodyParer.urlencoded({extended:true})) //metodo que rcepeta todas as requisiçoes e faz umparse sde json para objeto


app.get('/produtos',(req,res,next)=>{ //metodo get all produtos 
    res.send(bancoDados.getProdutos())//chama o banco all produtos 
})

app.get('/produtos/:id',(req,res,next)=>{//get um produto 
    res.send(bancoDados.getProduto(req.params.id))
})


app.post('/produtos',(req,res,next)=>{ //salva  um produto
    const produto = bancoDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})



app.put('/produtos/:id',(req,res,next)=>{ //salva  um produto
    const produto = bancoDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id',(req,res,next)=>{//get um produto 
    res.send(bancoDados.excluirProduto(req.params.id))
})

app.listen( //manda o servidor escutar na porta passada
    porta,
    ()=>{ console.log(`Servidor rodando na porta ${porta}`)} //so serve para jogar no console que o servidor esta rodando
)
