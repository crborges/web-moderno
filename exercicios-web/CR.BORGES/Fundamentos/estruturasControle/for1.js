let contador =1 
while (contador <=10){
    console.log(`Contador = ${contador}`)
    contador++
}

for(let i =1; i<=10; i++){
    console.log(`i = ${i}`)
}

const notas =[6.7,7.4,9.8,8.1,7.7]
for (let i=0; i<= notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}
/*
function getNumeroAleatorioEntre(min, max){
    const valor= Math.random()* (max - min) + min
    return Math.floor(valor)
}


let opcao =0

while (opcao!= -1)
{
    opcao=getNumeroAleatorioEntre(-1 ,10)
    console.log(`Opção escolhida ${opcao}`)
}
console.log('até a próxima')
*/