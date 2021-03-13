//funcao é  cidade de primeira classe 
//no mundo funcional é fucnoa de alta ordem 
//pode tratar funcoa com dado ou passar função como retorn de outra função
//se não colecare retyorna a fncao retorna undefined

//funcao de forma literal 
function fun1(){}
//armazenar em um variavel
const fun2 = function (){}
//armazenar em um array
const  array = [function (a,b){return a+b}, fun1, fun2]
//executando a funcao no array 
console.log(array[0](2,3))
//armazenar como atributo de uma funcao 
const obj ={}
obj.falar= function (){return 'Opa'}
console.log(obj.falar())
//passar uma funcao como parametro 
function run (fun){
    fun() 
}
run (function(){console.log('Executando')})  
// uma funcao pode retornar ou conter uma função
function soma (a,b){
    return function (c){
        console.log (a + b + c)
    }
}
//forma 01 de chamar uma funcão com uma funcão dentro
soma(2,3)(1)
//forma 02 de chaamr uma funcao com outra fucnoa dentro
const cincoMais= soma(2,3)
cincoMais(5)