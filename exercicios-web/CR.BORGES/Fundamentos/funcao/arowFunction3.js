let comparaComThis = function(param){ }

comparaComThis(global)// o this é igual ao global no contexto do node js
const obj ={}
comparaComThis =comparaComThis.bind(obj)//bindei no comapra com this  um obj que eu criei
comparaComThis(global)//aqui o compara com this vai var false porque o compara com thsi esta buindando com um obj que eu criei
comparaComThis(obj)//se eu passar o objeto que eu bindei ai sim da true porque são os mesmos

//fazendo com arow functions onde o this é fixo eu não consigo mexer em que é o this

let comparaComThisArow = param => console.log(this === param)

comparaComThisArow(global)// não aponta pra o global porque a arow function aponta para o contesto local e não para o global
comparaComThisArow(module.exports)//essa é a forma de pegar o arquivo local do node js
comparaComThisArow = comparaComThisArow.bind(obj)//vamos tentar alterar quem é o this numa funcao arow
comparaComThisArow(obj)//não vai adiantar fazer o bind pois na arow function o this é fixo e não pdoe ser alterado 