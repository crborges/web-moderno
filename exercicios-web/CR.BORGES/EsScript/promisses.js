const { promises } = require("fs");

function falarDepoisDe(segundos,frase){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(frase)
            //reject(frase)
        }, segundos*1000);
    })

}


//posso chamar quantos thens eu quiser para ir trabalahndo com o retorno de cada chaamda da promisse 
falarDepoisDe(3,'Que legal!')
    .then(frase=> frase.concat('?!?')) //a promisse cham um then e eu posso ir encadeando varios thens um dentro do outro 
    .then(OutraFrase=> console.log(OutraFrase))
    .catch(e=> console.log(e))//quando da erro eu chamo o catch paa tratar o erro