//async await
//ele vai esperar executar todas as funcçoes oara depois dar o resultado

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo) //simplesmente fic aesperando 2 segundos para resolver a função
    })
}
/*
esperarPor(2000) //fico esperando os 2 segundos e escrevendo no console com os meus thens
    .then(() => console.log('Executando promise 1'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3'))
    .then(esperarPor)
*/

    async function executarSemAwait(){ 
        //sem await ele vai executar todas as promisses e depois ele vai ficar esperando os 2 segundos de cada
        esperarPor(5000)
        console.log('Async await sem await 1 ...')
        esperarPor(5000)
        console.log('Async await sem await 2 ...')
        esperarPor(5000)
        console.log('Async await sem await 3 ...')
    }

    
    async function executarComAwait(){ 
        //com await ele vai esperar o tempo de execução para depois reponder
        //quando eu marco uma funcçãocomo async eu tenho como esperar o ordem de execução das funcçoes para dar resposta comos e algo asincrono fosse sincrono
        await esperarPor(3000)
        console.log('Async await com await 1 ...')
        await esperarPor(3000)
        console.log('Async await com await 2 ...')
        await esperarPor(3000)
        console.log('Async await com await 3 ...')
    }

    function retornarValor(){//uma promisse que demora 5 segundos parame retornar um valor 10
        return new Promise(resolve=> {
            setTimeout(() => resolve(10),5000)
        })
    }


 

    async function executar(){  
        let valor  = await retornarValor()
         // o sistema vai esperar os 5 segundos para ter o valor de retornar e dai depois executar as outrasd funções
         //isso parece um codigo sincrono só que ele é assincrono só que eu fico epsradno as resoluções dos codigos na ordem
        await esperarPor(1500)
        console.log(`Async/await ${valor}`)
        await esperarPor(1500)
        console.log(`Async/await ${valor+1}`)
        await esperarPor(1500)
        console.log(`Async/await ${valor+2}`)
        return valor+3
   }

    async function executarDeVerdade(){
        const valor = await executar()
        console.log(valor)
    }


    //executarSemAwait()
    //executarComAwait()
    //executar()

    //isso eu não posso fazer porque a função é assincrona ele vai ficar respodnendo que esta esperando a resolução
    //const v = executar();     console.log(v)
    //dessa forma ele não aprece como promisse pendente de execução
    //executar().then(console.log)
    //chamando a executar de uma outra função eu consigo usar async awai nela
    executarDeVerdade()
