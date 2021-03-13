const obj ={a:1,b:2,c:3, soma(){return a+b+c}}
console.log(JSON.stringify(obj))//transforma o objeto em json
//console.log(JSON.parse("{'a':1,'b':2,'c':3}"))// não é valido por causa das chaves sem aspas
//console.log(JSON.parse("{'a':1,'b':2,'c':3}"))// nao é valido pois as aspas tem qeus er aspas duplas
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))//formata json valido
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))