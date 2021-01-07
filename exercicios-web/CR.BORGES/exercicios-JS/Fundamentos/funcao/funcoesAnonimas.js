//uma funcao anonima é simplesmente uma funcao sem nome 
const soma = function (a,b) {return a + b}
const imprimirResultado = function (a , b, operacao = soma ){console.log(operacao(a,b))} //recebe 2 parametros e dentro dela chama  uma funcoa deseignada como operacao que por padrao é soma 

imprimirResultado(1,1)// sem passar a operacao
imprimirResultado(1,1, soma )// passando a operacao
imprimirResultado(1,1, function (x,y){return x -y} )//aqui vou passar uma outra funcao anonima para ser impressa
imprimirResultado(2,2, (x,y) => x * y )//passando uma arow function onde eu multiplico 2 caras

const pessoa ={ //criando um objeto e vou criar dentro dele uma funcao anonima 
    falar : function (){console.log('Opa')}
}

pessoa.falar()//a partir do objeto vou chamar a funcao que eu criei