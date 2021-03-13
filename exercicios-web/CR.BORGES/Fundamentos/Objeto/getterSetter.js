const sequencia ={
    _valor: 1,  //convencao de que esta variavel éprivada

    get Valor(){return this._valor++},
    set Valor(valor){if(valor> this._valor){this._valor=valor}}

}

//como acessar os gets e sets

console.log(sequencia.valor,sequencia.valor)
sequencia.valor=1000
console.log(sequencia.valor,sequencia.valor)
sequencia.valor=900
console.log(sequencia.valor,sequencia.valor)
