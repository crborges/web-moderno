//funcao arow é sempre anonima para chama ela tem que armazenar eum uma variavel ou constante
let dobro = function(a) { return 2 * a }//uma funcao numa variavel de forma normal 
dobro=(a)=> { return 2 * a} //primeira forma de criar uma funcao arow
dobro  = a => 2 * a // a mesma funcao de cima so que deuma foma mais reduzida ainda  onde o return esta implicito
console.log(dobro(Math.PI))


let ola = function (){return 'Olá!'} //forma padrao
ola =   () => 'Olá'//forma de funcao arow
ola = _=> 'Olá'//forma reduzida quando não tem parametros
console.log(ola())