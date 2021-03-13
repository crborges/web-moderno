const funcs =[]

for (let i =0; i<10 ; i++){
 funcs.push(
     function(){
         console.log(i)
     }
 )
}



funcs[2]()//o resultado mostrado é o valor atual do laco coletado pois let tem escopo de bloco
funcs[8]()