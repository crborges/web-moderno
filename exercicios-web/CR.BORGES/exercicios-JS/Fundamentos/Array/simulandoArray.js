const quaseArray ={0: 'Rafael',1:'Ana',2:'Bia'} 
console.log(quaseArray)

Object.defineProperty(quaseArray,'toString',{
    value: function(){return Object.values(this) }, 
    enumerable:false
})//criei um metodo para fazer o objeto se comportar como array


    console.log(quaseArray[0])//acesando como se fosse array
const meuArray  =['Rafael','Ana','Bia']
console.log(quaseArray.toString(),meuArray)