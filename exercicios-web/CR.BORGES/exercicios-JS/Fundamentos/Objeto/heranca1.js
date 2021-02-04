const ferrari ={
    modelo : 'F40',
    velMax: 324
}

const volvo ={
    modelo : 'V40',
    velMax: 200
}


console.log(ferrari.__proto__)//acesso o prototipo em java script que é o objeto pai
console.log(ferrari.__proto__ === Object.prototype)// o __proto__ é o OBJETC.PROTOTYPE
console.log(volvo.__proto__ === Object.prototype)//volvo tbem herda de prototype
console.log(Object.prototype.__proto__) //não existe um prototypeacima de object

function meuObjeto(){}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype,meuObjeto.prototype)