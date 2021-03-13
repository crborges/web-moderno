console.log('01)', '1' == 1)//é igual ignorando o tipo
console.log('02)', '1' === 1)//é igual considerando o tipo
console.log('03)', '3' != 3)//são diferentes ignorando o tipo
console.log('04)', '3' != 3)//são diferentes considerando o tipo
console.log('05)', 3 < 2)//menor que 
console.log('06)', 3> 2)//maior que 
console.log('07)', 3<= 2)//menor ou igual
console.log('08)', 3>= 2)//maior ou igual
const d1= new Date(0)
const d2= new Date(0)
console.log('09)', d1 === d2)//estritamente igual os objetos ,a posição de memoria
console.log('10)', d1 == d2)//igual  os objetos ,a posição de memoria
console.log('11)', d1.getTime() === d2.getTime())//as datas são extritamente iguais
console.log('12)', undefined == null)//igual
console.log('13)', undefined === null)//extritamente igual
