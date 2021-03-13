const carrinho= [
    '{"nome":"Borracha", "preco":3.45}',
    '{"nome":"Caderno", "preco":13.90}',
    '{"nome":"Kit de Lapis", "preco":41.22}',
    '{"nome":"Canete", "preco":7.20}'
]

//retorha um array dos preços
carrinho.map(
    function(e){ 
       dados= JSON.parse(e)
       console.log(dados.preco)
    }
)