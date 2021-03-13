//factory presonalizada
function criarProduto(nome, preco){
    const desconto = 10;
    return {
        nome: nome, 
        preco: preco,
        desconto: desconto
    }
}
console.log(criarProduto('prod 01', 100))
console.log(criarProduto('prod 02', 200))
console.log(criarProduto('prod 03', 300))
console.log(criarProduto('prod 04', 400))
console.log(criarProduto('prod 05', 500))
