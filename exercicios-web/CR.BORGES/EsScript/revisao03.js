//novos recusros relacioandos a objetos 
//es8: Object.values/Object.entries
//Object.values == retorna todos os valores do objeto 
//Object.entries == retorna todos os consjuntos de chave valor do objeto
const obj ={a:1,b:2,c:3}
console.log(Object.values(obj))//retorna um array com os valores do objeto
console.log(Object.entries(obj))//retorna uma matriz com  um conjunto de array chave valor onde cada array desses é um par chave valor do objeto

//melhorias no notação literal
const nome='Carla'
const pessoa ={//ao passar uma variavel para um obj ele vai criar um parametro com o nome do variavele  eo conteudo neste caso vai criar um paramtreo chamadao nome com valor Carla
    nome,
    ola(){//para colocar uma fucntion num objeto não precisa mais colocara aplavra function ó criar a funciton diretametne no objeto
        return 'Oi Gente'
    }
}
console.log(pessoa.nome)
console.log(pessoa.ola())



//notação class para definir uam classe
class Animal{}
class Cachorro extends Animal{// sintaxe de herança no java script 
    falar(){
        return 'au au !'
    }
}
console.log(new Cachorro().falar())