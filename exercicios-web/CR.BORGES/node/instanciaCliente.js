const { Console } = require('console')
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()


contadorA.inc()
contadorA.inc()//INCREMENTEI 2 VEZES O CONTADOR A
console.log('Valor de contador B '+contadorB.valor)//ISSP DEVE REFLETIR NO CONTADOR B POIS O NODE FAZ CACH

contadorC.inc()
contadorC.inc()// no caso do contador de instacia nova eu force i uma factory ou seja toda a vex que eu cham rro codigo ele vai criar uma nova instancia então se mexono contador c no d não tem reflexo
console.log('Valor de contador C '+contadorC.valor+' Valor de contador D '+contadorD.valor)