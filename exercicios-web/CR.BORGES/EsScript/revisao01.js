//let e const
{
    var a =2// a tem escopo geral consigo aacessar fora do bloco onde foi declarada {}
    let b =3//b tem escopo de bloco só pode ser acessada dentro do bloco onde foi criada
    console.log(b)//aqui eu consigo dar console.log de b posie stano emsmo bloco que ele
}
console.log(a)//consigo dar console.log desta var aqui
//console.log(b)//não consigo dar console.log desta let pque ela só tem visibilidade dentro do bloco que foi criada

//template string
const produto = 'Ipad'
console.log( //pode dar quebra de linha com template string
    `${produto}
     é caro !`
)

//destructing tirar de uma estrutura
const [l,e, ...tras] = 'Cod3r' //criei um array com as chaves l e e e um array interno de nome tras e tirei dele  o valoir cod3r
console.log(l,e,tras)

const [x,y]= [1,2,3]
console.log(x,y)//tirei do array de posições xe y os valores 1 e 2

const {idade: i, nome }= {nome: "ana", idade: 9} //vou desestruturar um objeto
console.log(i, nome)