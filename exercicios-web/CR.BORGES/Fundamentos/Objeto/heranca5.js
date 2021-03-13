console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)


// não tem dentro da api de string mao posso criar pelo prototype e criar um metodo no core 
String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
console.log('Cristiano Borges'.reverse())
//criar via prototype um car aquew reotrna o priemiro elemento de uma ray
Array.prototype.first = function(){
    return this[0]
}
console.log([1,2,3,4,5].first())
console.log(['a','b','c','d'].first())

//ao soibrescrever to string via prototype tudo quer usa to strng vai passar a usar a que eu criei
String.prototype.toString= function(){
    return 'lascou tudo'
}
console.log('Cristiano Borges'.reverse())