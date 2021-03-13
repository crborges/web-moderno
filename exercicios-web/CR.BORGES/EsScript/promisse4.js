
function gerarNumerosEntre(min, max,tempo){
    if(min >max){  [max,min] =[min,max] } // se mimnimo maior que maximo eu tenho que invertes os valores de mim e maximo
    return new Promise(resolve=> {
           setTimeout(function() {
                const fator = max - min + 1
                const aleatorio =Math.floor(Math.random() * fator ) + min;
                resolve (aleatorio)
           }, tempo); 
    })
}


function gerarVariosNumeros(){
    return Promise.all ([
        gerarNumerosEntre(1,60,4000),
        gerarNumerosEntre(1,60,1000),
        gerarNumerosEntre(1,60,500),
        gerarNumerosEntre(1,60,3000),
        gerarNumerosEntre(1,60,100),
        gerarNumerosEntre(1,60,1500)
    ])
}



console.time('Promisse')// medir o tempo que demorou
gerarVariosNumeros()
    .then(console.log)
    .then(()=>{
        console.timeEnd('Promisse')// mostra o tempo de execução das funções
    })