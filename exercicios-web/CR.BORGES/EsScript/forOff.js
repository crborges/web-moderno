//for off itera emcima dos values
//iterando numa String
console.log('\n')
for (let letra of 'Cod3r') {// vai fazer um for em cada uma das letras de cod3r
    console.log(letra)
}
const assuntosEcma=['Map','Set','Promisse']
console.log('\n')
for (let i in assuntosEcma){//itera emcina dos indices do array usando o in
    console.log(i)
}
console.log('\n')
for (let assuntos of assuntosEcma){//itera emcina dos valores do array usando o of
    console.log(assuntos)
}
const assuntosMap = new Map([
    ['Map',{abordados:true}],
    ['Set',{abordados:true}],
    ['Promise',{abordados:false}]
])
console.log('\n')
for (let assunto of assuntosMap){//iteradndo todos o itnes do array
    console.log(assunto)
}
console.log('\n')
for(let chave of assuntosMap.keys()){//itera as chaves do array
    console.log(chave)
}
console.log('\n')
for (let valor of assuntosMap.values()){//percorrendo os valores do array
    console.log(valor)
}
console.log('\n')
for (let [ch,vl] of assuntosMap.entries()){ //destructing o array e pegando os seus valores
    console.log(ch,vl)
}
console.log('\n')
const s = new Set(['a','b','c'])
for (let letra of s){//iterando um set
    console.log(letra)
}