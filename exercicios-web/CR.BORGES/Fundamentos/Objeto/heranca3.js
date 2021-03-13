const pai ={ nome: 'Pedro', corCabelo : 'preto'}
const filha1 = Object.create(pai)//cria um objeto ja dizendo quem é o pai 
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome : {value: 'Bia',writable: false,enumerable : true}
})
console.log(filha2.nome)
filha2.nome='Carla'// não posso fazer pois não é possivel reescrever o noem
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
console.log(Object.keys(filha1))//atributos de filha 1
console.log(Object.keys(filha2))//atributos de filha 2

for (let key in filha2){
    //vou iterar todas as propriedades de filha2 e separar as  propriedades dela e as herdadas
     filha2.hasOwnProperty(key)? console.log(key):console.log(`Por herança ${key}`)
}