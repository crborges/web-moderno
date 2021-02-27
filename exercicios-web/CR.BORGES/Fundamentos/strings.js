const escola = "Cod3r"

console.log(escola.charAt(4)) //pega a posiççao 4 da string começa com 0 
console.log(escola.charAt(5))//pega uma posição da string que não existe retorna null ou nada
console.log(escola.charCodeAt(3))//retorna o code ascii do caractere pasado 
console.log(escola.indexOf('3'))//retorna o que esta no indice 3 da strint
console.log(escola.substring(1))//vai mosntrar o que tem do indice 1 ate o fim 
console.log(escola.substring(0,3))//vai mosntrar o que tem do indice 0 ate o inidce da quantidade passada (0+3)
console.log("Escola ".concat(escola).concat(' !'))//usando uma funcção apra concaternar coisas em variaveis
console.log(escola.replace(3,"e"))//substitui tudo que tem 3 por e
console.log(escola.replace(/\d/,"E"))//substitui por expressão regular (qq digito encotnrado substitui por e)
console.log('Ana,Maria,Pedro'.split(','))//transforma string em array