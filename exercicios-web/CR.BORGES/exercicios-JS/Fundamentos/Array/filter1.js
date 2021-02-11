const produtos=[ 

    {nome: 'Notebook', preco :2499,fragil:true},
    {nome: 'Ipad pro', preco :4199,fragil:true},
    {nome: 'Copo de vidro', preco :12.49,fragil:true},
    {nome: 'Copo de Plastico', preco :18.99,fragil:false}
]

console.log(produtos.filter( function(p){ //chama um callback que vai filtrar coisas a parit do que esta dentro
     return (p.preco >500 && p.fragil==true)
}))

const ehCaro = function(p){return p.preco >500 }
const ehFragil= function (p){return p.fragil }


console.log(produtos.filter(ehFragil).filter(ehCaro))