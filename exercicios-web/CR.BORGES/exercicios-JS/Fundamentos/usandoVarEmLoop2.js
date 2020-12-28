const funcs =[]

for (var i =0; i<10 ; i++){
 funcs.push(
     function(){
         console.log(i)
     }
 )
}



funcs[2]()//o resultado é sempre 10 pois o JS não tem escopo de bloco ele vai mostrar o valor atual de VAR
funcs[8]()