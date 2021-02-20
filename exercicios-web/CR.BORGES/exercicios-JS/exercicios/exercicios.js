//1 - cuprimentar
function cumprimentar(nome) {   return "Olá "+nome; }

//2 - idade em dias 
function converterIdadeEmAnosParaDias(idade) {return idade*365} 

//3 salario * hora
function calcularSalario(horas, valorHora){return "Salário igual a R$ "+(horas*valorHora).toFixed(2)}

//4 -  nome do mes 
function nomeDoMes(mes){
    switch (mes){
        case 1:     return "Janeiro";           break;
        case 2:     return "Fevereiro";         break;
        case 3:     return "Março";             break;
        case 4:     return "Abril";             break;  
        case 5:     return "Maio";              break;
        case 6:     return "Junho";             break;
        case 7:     return "Julho";             break;
        case 8:     return "Agosto";            break;
        case 9:     return "Setembro";          break;
        case 10:    return "Outubor";           break;
        case 11:    return "Novembro";          break;
        case 12:    return "Dezembro";          break;
        default:    return "Valor Inválido";    break;
    }
}

//5 - maior ou igual
function maiorOuIgual(num01,num02){
    return num01>=num02
}

//6 - retorna inverso
function inverso (valor){
    if(valor===true || valor === false) {return "O inverso é"+(!valor) }
    else if(!isNaN(valor)){ return "O inverso é "+ (valor*-1)}
    else {return `Esperados os tipo boolean e Numeber voce enviou ${typeof valor}`}
}

//7 - esta entre 
function estaEntre(num,minimo,maximo,inclusivo){
    if (inclusivo){ 
        if (num >= minimo && num<=maximo){ return true; }
        else{ return false;}
    }
    else {
        if (num > minimo && num<maximo){ return true; }
        else{ return false;}
    }


}

//8 - multiplicar
function multiplicar(num01,num02){
    let soma =0;
    for(let i=1; i<=num02; i++){
        soma=soma+num01
   }
   return soma;
}

//9 - repetir 
function repetir(valor,repeticoes){
    repeticoes= isNaN(repeticoes) ? 1:repeticoes//garante que repeticoes é umm numero 
    let arr =[];

    for (let i=1;i<=repeticoes;i++){
        arr.push(valor);
    }
    return arr;
}

//10 - simbolo mais 
function simboloMais(repeticoes){
    repeticoes= isNaN(repeticoes) ? 1:repeticoes//garante que repeticoes é umm numero 
    let ret=''
    for (let i =0; i<repeticoes;i++){
        ret=ret+'+'; 
    }
    return ret;
}

//11 - Primeiro e ultimo do array
function receberPrimeiroEUltimoElemento(array){
    let array2 = []
    if(Array.isArray(array)){
        array2.push(array[0])
        array2.push(array[array.length-1])
    }
    return array2
}

//12 remover propriedade
function removerPropriedade(obj, propriedade){
   // console.log("o tipo eh "+typeof obj)
    if (typeof obj === 'object'){
        delete obj[propriedade]
    }
    return obj
}

// 13- retoran somente numeros array
function filtrarNumeros(array){
    const ehNumber = function(p){return !isNaN(p) }
    return array.filter(ehNumber)
}

//14 -de obj para arrray
function objetoParaArray(obj){return Object.entries(obj)}

//15 - retorna párea de indices pares
function receberSomenteOsParesDeIndicesPares(array){
    let ret = []
    for (let i =0 ;i< array.length; i+=2){
        if(array[i]%2==0){ret.push(array[i])}
    }
    return ret
}

//16 - define se ano eh bisexto
function checarAnoBissexto(ano){
    return ((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0);
}

//17 - somar elemento array
function somarNumeros(array){
    let soma = 0;
    for(let i =0; i<array.length;i++){
        soma =soma+array[i]
    }
    return soma
}

//18 - retorna despesa de array
function despesasTotais(array){
    let soma =0;
    for (let item of array){
        soma+=item.preco
    }
    return soma
}


//19 - calcula a media de um conjunto de numeros 
function calcularMedia(array){
    let media =0;
    for (let valor of array){
        media +=valor
    }
    return media/array.length
}

//20 - area trinagulo
function areaDoTriangulo(base,altura){
    return ((base*altura)/2).toFixed(2)
}

//21 - retorna o menor do array 
function menorNumero(array){
    return array.sort(function(a,b){return a-b})[0]
}

//22 - sorteador 
function funcaoDaSorte(numero){
    let sorteado =Math.floor(Math.random() * (10 - 0)) + 0;
    if(numero>0 && numero <10){
        if(numero===sorteado){ return `Parabens o número sorteado foi ${sorteado} e você escolheu ${numero}`}
        else{return `Que pena !!! você escolheu ${numero} e o número sorteado foi ${sorteado}`}
    }
    else {return `Voce deveria escolhe um núemor entre 1 e 10 e você escolheo ${numero}`}
}

//23 - constarpalavras de uma string
function contarPalavras(string){
    return string.split(' ').length
}

//24 - conta repeticoes string
function contarCaractere(string,caractere){
    let cont =0
    string = string.toUpperCase()
    caractere = caractere.toUpperCase()

    for(let i  =0;i<string.length;i++){
        if(string[i]==caractere){cont++}
    }
    return cont
}

// 25 - busca palavras semelhantes
function buscarPalavrasSemelhantes(inicio, palavras){
    return palavras.filter(palavra => palavra.includes(inicio))
}

//26 - Remove vogais
function removerVogais(frase){
    return frase.replace(/[aeiouà-ú]/gi,'')
}

//27 - inverte dados objeto
function inverter(objeto){
    let objetoInvertido ={}
    Object.entries(objeto).forEach( parChaveValor => {
        const chave = 0,
        valor = 1
        objetoInvertido[ parChaveValor[valor] ] = parChaveValor[chave]
    })

    return objetoInvertido;
}

//28 - retorna por quantidade de digitos
function filtrarPorQuantidadeDeDigitos(array,digitos){
    let ret = []
    array.forEach(valor=>{
        if(String(valor).length ===digitos){ret.push(valor)}
    })
    return ret
}

//29 - retorna o segundo maior
function segundoMaior(array){
    return array.sort(function(a,b){return a-b})[array.length-2]
}

//30 - define melhos estudante
const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length
function recerberMelhorEstudante(estudantes) {
const estudantesComMedias = Object.entries(estudantes).map( estudante => {
const chave = 0,
valor = 1
return { nome: estudante[chave], media: media(estudante[valor]) }
})
const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
const melhorEstudante = estudantesOrdenados[0]
return melhorEstudante
}


//chamadas 
console.log("Exercicio 01 - "+cumprimentar('Cristiano'))
console.log("Exercicio 02 - "+converterIdadeEmAnosParaDias(41))
console.log("Exercicio 03 - "+calcularSalario(150,40.55))
console.log("Exercicio 04 - "+nomeDoMes(11))
console.log("Exercicio 05 - "+maiorOuIgual(-2,1))
console.log("Exercicio 06 - "+inverso(758))
console.log("Exercicio 07 - "+estaEntre(3, 150, 3, true))
console.log("Exercicio 08 - "+multiplicar(6,4))
console.log("Exercicio 09 - "+repetir('Bunito',3))
console.log("Exercicio 10 - "+simboloMais(25))
console.log("Exercicio 11 - ");console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))
console.log("Exercicio 12 - "+removerPropriedade({ id: 20, nome: "caneta", descricao: "Não preenchido" }, "descricao"))
console.log("Exercicio 13");console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))
console.log("Exercicio 14");console.log(objetoParaArray({nome: "Maria", profissao: "Desenvolvedora de software",idade : 30, salario :5000}))
console.log("Exercicio 15 - "+receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))
console.log("Exercicio 16 - "+checarAnoBissexto(2020))
console.log("Exercicio 17 - "+somarNumeros([15, 15, 15, 15]))
console.log("Exercicio 18 - "+despesasTotais([{nome: "Jornal online", categoria: "Informação", preco: 89.99},{nome: "Cinema", categoria: "Entretenimento", preco: 150}]))
console.log("Exercicio 19 - "+calcularMedia([1, 2, 3, 4, 5]))
console.log("Exercicio 20 - "+areaDoTriangulo(9.25, 13.1))
console.log("Exercicio 21 - "+menorNumero([10, 5, 35, 65]))
console.log("Exercicio 22 - "+funcaoDaSorte(8))
console.log("Exercicio 23 - "+contarPalavras("Me divirto aprendendo a programar"))
console.log("Exercicio 24 - "+contarCaractere("A sorte favorece os audazes","a"))
console.log("Exercicio 25 - "+buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
console.log("Exercicio 26 - "+removerVogais("Me divirto aprendendo a programar"))
console.log("Exercicio 27 - ");console.log(inverter({ a: 1, b: 2, c: 3}))
console.log("Exercicio 28 - ");console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log("Exercicio 29 - "+segundoMaior([8, 4, 5, 6]))
console.log("Exercicio 30 - ");console.log(recerberMelhorEstudante(
    {
        Joao: [8, 7.6, 8.9, 6], // média 7.625
        Mariana: [9, 6.6, 7.9, 8], // média 7.875
        Carla: [7, 7, 8, 9] // média 7.75
    }
))