const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1,peso2)
console.log(Number.isInteger(peso1));

const avaliacao1=9.871;
const avaliacao2=6.871;

const total = avaliacao1*peso1+avaliacao2*peso2;
const media= total/(peso1+peso2)

//arredonda para 2 casas decimais
console.log(media.toFixed(2))
//transforma numbem em string
console.log(media.toString())
//transforma em strngo com valor binario(passa a casa )
console.log(media.toString(2))
//transforma em strngo com valor hexadecimal(passa a casa )
console.log(media.toString(16))
//pega o tipo de media
console.log(typeof media)
//pega o tipo de Number
console.log(typeof Number)

