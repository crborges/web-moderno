function TratarErroELancar(erro){
    //throw new Error('...')
    //throw 'Mensagem'
    throw { 
        nome: erro.name,
        msg:  erro.message,
        date: new Date
    }

}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase()+" !!!")

    }catch(e){
        TratarErroELancar(e)
    }finally{
        console.log('finalização')
    }
}

const obj ={name: "Roberto"}
imprimirNomeGritado (obj)


const obj2 ={nome: "Roberto"}
imprimirNomeGritado (obj2)