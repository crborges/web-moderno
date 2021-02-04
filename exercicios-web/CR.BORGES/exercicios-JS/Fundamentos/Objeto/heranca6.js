function Aula (nome,videoID){
    this.nome = nome
    this.videoID= videoID
}

const aula1 = new Aula('Bem vindo',123)
const aula2 = new Aula('Até  breve',456)
console.log(aula1,aula2)


//simulando o new 
function novo (f, ...params){      //recebo a funcao a isntancia e um array com os parametros
    const obj={}                   //croi um objeto novo
    obj.__proto__ = f.prototype    //aponto o portotype desse objeto par ao prototype da fucnao passada
    f.apply (obj,params)           //chama a funcão passada e passa o array d eargumento para criar o objeto
    return obj                     //retorna o obejto criado
}
//vou crair o obejto com o meu novo new que é novo
const aula3 = novo(Aula,'outra aula ', 789)
const aula4 = novo(Aula,'quart aula ', 1011)
console.log(aula3,aula4)