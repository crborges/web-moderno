//ojeto é uma coleção de chave vzor simplesmente
const prod1={   }//criei um objeto vazio
prod1.nome="Celular ultra mega" //criei um atributo
prod1.valor=4998.90//criei outro atributo
prod1['Desconto legal']=0.40//criei um atributo com nbome comporto separado pro " "(espaço) EVITE SEMPRE
console.log(prod1);
//cria um objeto populado
const prod2={
    nome:'Camisa Polo',
    preço: 79.90, 
    obj:{//objeto dentro de objeto
        atr01: 1,
            obj:{//mais um objeto aninhando
                atr02:2
            }
    }
}
console.log(prod2);