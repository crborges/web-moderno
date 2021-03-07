let a = 1  // ao criar uma variavel ela ja esta disponivel imediatamente na proxima linha 
console.log(a)


let p = new Promise(//aqui tenho uma promessa de algo que vai ser devolvido no futuro vou receber um valro seja la o que for 
function (resolve){//vou passar um função para cumprir a promessa que eu fiz
    resolve([
     'Ana','João','Maria','Pedro','Marta','Cristiano'      
    ]) //aqui esta executando a promessa
} ) 
console.log(typeof p) //a promessa é um ojeto do tipo promisse
console.log(typeof Promise) //a promessa é uma function (object)

//para executar a promisse
p.then(function(valor){ //essa funcao e cumprida no momento que a promessa é cumprida
console.log(valor)//aqui posso pegar o valor que ele retornou
//uma promisse  retorna somente um valor se eu tentar pegar/passar mais de um valor os valores a mais serão ignorados
//para devolvermais de um valor posso usar obejetos arrays etc..
})

//posso processar a proise como uma arrow function
p
    .then(valor => valor[0])                      //peguei do array retornadom o primeiro elemento              execuei um arrow function no then da promisse
    .then(primeiro=> primeiro[0])                 //peguei a primeira letra do primeiro elemento do array       posso chamar varias funções para irprocessando so retornos da prmomisse cada nova funcao vai dando um novo processamento nos dados que eu tiver
    .then(letra=> letra.toLowerCase())            //transformei a primeir lçetra em minsucula
    .then(minuscula => console.log(minuscula))    //exibi a oprimeira me minusculas

    //o resultado de um then é passado para o proximo e para o procximo e assim por diante 



    
    //os then podem receber funcçoes prontas para tratar os retornos 
    function primeiroElemento (array){return array[0]}
    function primeiraLetra(string){return string[0]}
    function paraMinuscula(string) {return string.toLowerCase()}
    function imprimeDado(string) {console.log(string)}

    p
    .then(primeiroElemento)                     
    .then(primeiraLetra)                
    .then(paraMinuscula)           
    .then(imprimeDado)   
