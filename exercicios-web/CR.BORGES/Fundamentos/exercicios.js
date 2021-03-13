// 01 - Função aritimetica
function aritimetica(a,b){
    a= isNaN(a) ? 1: a  //seta um valor padrão caso não passe, o valor padrão é 1
    b= isNaN(b) ? 1: b  
    console.log('Exercicio 01')    
    console.log(a + b)    
    console.log(a - b)    
    console.log(a * b)    
    console.log(a / b)    
}

//02 - triangulos
function triangulos(lado1,lado2,lado3){
    console.log('Execicio 02')
         if(lado1===lado2 && lado2===lado3 && lado1===lado3){console.log('Triângulo equilatero')}
    else if(lado1===lado2 || lado2===lado3 || lado1===lado3){console.log('Triângulo isóceles')}
    else  {console.log('Triângulo escaleno')}
}

// 03 potencia
function potencia (base,expoente){
    return Math.pow(base, expoente)
}

//04 - resto divisão
function restoDivisao(dividendo,divisor){
    return dividendo%divisor
}

//05 - formata dinheiro
function formataDinheiro(valor){
    return "R$ "+valor.toLocaleString('pt-br', {minimumFractionDigits: 2});
}

//06 - juros simples e compostos
function jurosSimples(capitalInicial, taxaJuros, tempo){
    return capitalInicial + (capitalInicial*taxaJuros*tempo)
}
function jurosCompostos(capitalInicial, taxaJuros, tempo){
    return capitalInicial*(Math.pow((1+taxaJuros),tempo))
}

//07 - baskara
function baskara(valorA, valorB, valorC){
    let delta = 0
    let cof01=0
    let cof02=0
    let raizes = []

    delta= (valorB * valorB) - 4 * valorA * valorC
    if(delta< 0){ return  'Para delta negativo não existem raizes'  }
    else{
        cof01=  (-valorB + Math.sqrt(delta)) / (2 * valorA)
        cof02=  (-valorB - Math.sqrt(delta)) / (2 * valorA)
        raizes.push(cof01)
        raizes.push(cof02)
        return raizes
    }
}

//exercicio 08 pontuações
function recordesPontuacoes(pontuacao){
    console.log('Exercicio 08')
    let pontuacoes=pontuacao.split(' ')
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    console.log('Meu pior jogo foi o de numero'+piorJogo+' Bati o recorde em '+(qtdQuebraDeRecords) )
}

//execicio 09 notas
function notas(nota) {
    let notaArredondada=0
    if(nota>=40){
     
        if (nota % 5 > 2) {
            notaArredondada= nota + (5 - (nota % 5))
        } else {
            notaArredondada= nota
        }

      console.log('Você foi aprovado com a nota '+nota)
  
     }
     
    else {
        console.log('Voce foi reprovado com a nota '+nota)  
    
    }
}

//10 - divisiveis por 3 
function divisiveisPor3(numero){
    if(numero % 3 == 0){return true}
    else {return false}
}


//11 - Define se ano é bisexto
function defineAnoBisexto(ano){
  if((ano %4 == 0)  && (ano % 100 !=0 ) || (ano % 400 == 0)){
      return true
  }
  else {
      return false
  }
}

//12 -  calculo fatorial
function fatorial (numero){
    let fatorial = 1
    for(let i = 1; i <= numero; i++){
        fatorial *=i
        if (fatorial == Infinity) { 
                return 'erro ao exceder o limite numerico do engine de execução'
        }    

    }
    return fatorial

}

//13 - Define tipo de dia
function defineTipoDia(dia){
    switch(dia){
        case 1  : return 'Fim de semana - Domingo';     break;
        case 2  : return 'Dia útil - Segunda Feira';    break;
        case 3  : return 'Dia útil - Terça Feira';      break;
        case 4  : return 'Dia útil - Quarta Feira';     break;
        case 5  : return 'Dia útil - Quinta Feira';     break;
        case 6  : return 'Dia útil - Sexta Feira ';     break;
        case 7  : return 'Fim de Semana - Sábado';      break;
        default : return 'Dia inválido';                break;
        }
    }

//14 - Switch com frutas
function qualAFruta(fruta){
    switch (fruta.toUpperCase()) {
        case    'MAÇA'      :  return 'Não vendemos essa fruta aqui'      ; break; 
        case    'KIWI'      :  return 'Estamos com escassez de kiwis'      ; break; 
        case    'MELANCIA'  :  return 'Aqui está, são 3 reais o quilo'    ; break; 
        default             :  return 'Fruta desconhecida'                ; break; 
    }
}

//15 - revenda de carros
function qualCarro(carro){
    switch (carro.toLowerCase()) {
        case    'hatch'          :  return 'Compra efetuada com sucesso';               break; 
        case    'sedans'         :  return 'Tem certeza  que não prefere este modelo?'; break; 
        case    'motocicletas'   :  return 'Tem certeza  que não prefere este modelo?'; break; 
        case    'caminhonetes'   :  return 'Tem certeza  que não prefere este modelo?'; break; 
        default                  :  return 'Não temos esse tipo de carro'                ; break; 
    }
}    

//16 calculadora
function calculadora(num01, operacao, num02){
    num01= isNaN(num01) ? 1:num01 //seta um valor padrão caso não passe, o valor padrão é 1
    num02= isNaN(num02) ? 1:num02 //seta um valor padrão caso não passe, o valor padrão é 1
    switch (operacao.toLowerCase()) {
        case    '+'     :  return num01 + num02;        break; 
        case    '-'     :  return num01 - num02;        break; 
        case    '*'     :  return num01 * num02;        break; 
        case    '/'     :  return num01 / num02;        break; 
        default         :  return 'operacao invalida';  break; 
    }
}    

//17 aumento salarial
function calculaNovoSalario(salarioAtual, plano){
    salarioAtual= isNaN(salarioAtual) ? 1:salarioAtual
    if (salarioAtual> 1) {
        switch (plano.toLowerCase()) {
            case    'a'     :  return salarioAtual+=salarioAtual * 0.1;  break; 
            case    'b'     :  return salarioAtual+=salarioAtual * 0.15; break; 
            case    'c'     :  return salarioAtual+=salarioAtual * 0.2;  break; 
            default         :  return 'Plano inválido'                ;  break; 
        }
    } 
    else {
        return 'Salário inválido'
    }
}   


//18 ler de 0 a 10
function ler0a10(numero){
    numero= isNaN(numero) ? 0:numero//seta por padrão 0 se nao vier um numero
    switch (numero){
        case 0:     return "Zero";                      break;
        case 1:     return "Um";                        break;
        case 2:     return "Dois";                      break;
        case 3:     return "Três";                      break;
        case 4:     return "Quatro";                    break;
        case 5:     return "Cinco";                     break;
        case 6:     return "Seis";                      break;
        case 7:     return "Sete";                      break;
        case 8:     return "Oito";                      break;
        case 9:     return "Nove";                      break;
        case 10:    return "Dez";                       break;
        default :   return "nuemro fora do intervalo";  break;
    }
}

//19 funcão lancheria
function lancheria(codigo,quantidade){
    quantidade= isNaN(quantidade) ? 1:quantidade//seta quantidade como numero e pro padrão 1
    let valor=0;
    switch (codigo){
        case 100: valor=3*quantidade;       return 'Voce pediu '+quantidade+' Cachorro(S) Quente(S) o total foi de R$'+valor; break;
        case 200: valor=4*quantidade;       return 'Voce pediu '+quantidade+'  Hambúrguer Simples o total foi de R$'+valor; break;
        case 300: valor=5.5*quantidade;     return 'Voce pediu '+quantidade+' Cheeseburguer o total foi de R$'+valor; break;
        case 400: valor=7.5*quantidade;     return 'Voce pediu '+quantidade+' Bauru o total foi de R$'+valor; break;
        case 500: valor=3.5*quantidade;     return 'Voce pediu '+quantidade+' Refrigerante o total foi de R$'+valor; break;
        case 600: valor=2.80*quantidade;    return 'Voce pediu '+quantidade+' Suco o total foi de R$'+valor; break;
        default : return "produto não cadastrado";  break;
    }
}

//20 caixa eletronico
function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque)
	
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }

        valorNota = calcularValorNota(valorSaque)

    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}


function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}


function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

// 21 calculo plano de saude
function planoSaude(idade){
    idade= isNaN(idade) ? 1:idade//seta quantidade como numero e pro padrão 1
    let valorDefault= 100
    if (idade<10)                       {   return valorDefault+80;   }
    else if(idade>= 10 && idade <=30)   {   return valorDefault+50;   }
    else if(idade> 30 && idade <=60)    {   return valorDefault+95;   }
    else if(idade> 60)                  {   return valorDefault+130;  }
}


//22 calculo pagamento associação clube 
function valorMensalidadeClube(mesPagto){
    let valorAssociacao=100;
    return (valorAssociacao * Math.pow((1 + (5/100)), mesPagto)).toFixed(2);
}

//23 notas aluno
function notasAluno(codigo, nota1,nota2,nota3){
    let notas = [nota1,nota2,nota3]; notas.sort();
    let media=0;
    media=(((notas[2]*4)+(notas[0]*3)+(notas[1]*3))/(10)).toFixed(0);
    let resultado = media >5 ? 'Aprovado':'Reprovado';

    return '\n\no aluno código '+codigo+' tirou as seguintes notas Nota 1='+nota1 +' Nota2='+nota2+' Nota3='+nota3+' a média é '+media+' ele foi '+resultado;
}



//24 11 vezes hello world

function helloWorld11(){
    let cont =0;
    while (cont <=10){
        console.log('Iteracao '+cont+' Hello World')
        cont++

    }
}


//25 numeros na tela 
function numerosNaTela(){
    let cont =1;
    while (cont <=50){
        console.log('laço '+cont+'')
        cont++

    }
}




//26 pares ate 100
function paresAte100(){
    let cont =1;
    while (cont <=100){
        if(cont%2==0){ console.log('O número '+cont+' é par')} 
        cont++

    }
}



//27 taxa de crescimento das crianças 
function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2){
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return calcularTempo(altura2, taxa2, altura1, taxa1) 
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return calcularTempo(altura1, taxa1, altura2, taxa2) 
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    console.log(qtdAnos)
    return qtdAnos
}




//28 pares e impares
function paresImpares(valores){
    let pares=0;
    let impares=0;

    for(i=0 ;i<valores.length; i++){
        if(valores[i]%2==0){ pares=pares+1;}
        else{impares=impares+1;}
    }

    console.log('No vetor temos Pares='+pares+' Impares ='+impares)

}


//29 de 10a 20
function de10A20(valores){
    let intervalo=0;
    for(i=0 ;i<valores.length; i++){
        if(valores[i]>=10 && valores[i]<=20){ intervalo=intervalo+1;}
    }
    console.log('Estao no itervalo '+intervalo+' números')
}

//30 maior e menor do vetor 
function maiorMenor(valores){
    valores.sort((a, b) => a - b);
    console.log('O maior é '+valores[valores.length-1]+' o menor é '+valores[0])
}



//31 contagem de negativos 
function contaNegativos(valores){
    let negativos=0;
    for(i=0 ;i<valores.length; i++){
        if(valores[i]< 0){ negativos=negativos+1;}
    }
    console.log('Existem '+negativos+' números negativos no vetor')
    
}



//32 media aritmetica
function mediaAritimetica(valores){
    let media=0;
    for(i=0 ;i<valores.length; i++){
        media +=valores[i]
    }
    media=(media/valores.length).toFixed(0)
    console.log('A media aritimética dessas valores é  '+media)
}


//33 unir vetores
function unirVetores(vetorInteiro,vetorString,vetorDouble){
    let vet01=  vetorInteiro.concat(vetorString).concat(vetorDouble)
    let vet02 =  vetorInteiro.concat(vetorString,vetorDouble)
   return vet01.concat(vet02)
}


//34 compara strings 
function comparaStrings(string1, string2){
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++){
            let caractereString2 = string2.charAt(j).toLowerCase()
            if(caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido) {
            return estaContido
        }
    }
    return estaContido
 }


 //35 unir vetores com push 
function unirVetoresPush(vetor1,vetor2){
 
    for(i=0 ;i<vetor2.length; i++){
        vetor1.push(vetor2[i]);
    }
    console.log('o vetor resultante é  '+vetor1)
}

//36 2 funhcçoes de multioplicação de vetores 
function multiplica5(valores,multplicador){
    let vetorRes=[];

    for(i=0 ;i<valores.length; i++){
        vetorRes.push(valores[i]*multplicador);
    }
    //if(valores.length>5){multiplica5(vetorRes,multiplicador)}
    return vetorRes
}


// 37 progressao aritmetica e geometrica
function progressaoAritimetica(n, a1, r) {
     for (let i = 0; i < n; i++) {
    console.log(a1 + r*i)
}
console.log(' Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)    
}


function progressaoGeometrica(n, a1, r) {
    //console.log(a1)
    for(let i = 0; i < n; i++){
        console.log(a1*(r**i))
    }
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
}


//38 impime impares 
function imprimeImpares(inicio,fim){
    let limites=[]
    let resultado=[]
    limites.push(inicio);limites.push(fim);
    limites.sort((a, b) => a - b);
    
    for(let i = limites[0]; i < limites[1]; i++){
        if(i%2 !=0){resultado.push(i)}
    }
    return resultado;
}


//39 troca valores de posição 
function trocaValores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        return 'Vetores de tamanhos diferentes.'
    }

    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}


//40 conceitos de notas
function conceituarNotas(notas) {
    let conceitos = []
    for(let i = 0; i < notas.length; i++) {
        if(notas[i]>=0 && notas[i]<=4.9){
            conceitos.push('D')
        } else if(notas[i]>=5 && notas[i]<=6.9) {
            conceitos.push('C')            
        } else if(notas[i]>=7 && notas[i]<=8.9) {
            conceitos.push('B')
        } else if(notas[i]>=9 && notas[i]<=10){
            conceitos.push('A')
        } else {
            conceitos.push('Nota inválida')       
       }
    }
    return conceitos
}

//chamamdas
/* exercicio 01*/ aritimetica(2,2)
/* exercicio 02*/ triangulos(56,56,56); triangulos(56,56,58); triangulos(56,57,58); 
/* exercicio 03*/ console.log('Exercicio 03 - '+potencia(2,3))
/* exercicio 04*/ console.log('Exercicio 04 - '+restoDivisao(3,2)) 
/* exercicio 05*/ console.log('Exercicio 05 - '+formataDinheiro(0.30000000000000004))
/* exercicio 06*/ console.log('Exercicio 06 - Juros simples '+jurosSimples(1200,0.02,15))
/* exercicio 06*/ console.log('Exercicio 06 - Juros compostos '+jurosCompostos(10000,0.1,1))
/* exercicio 07*/ console.log('Exercicio 07 - '+baskara(3,5,-12)) 
/* exercicio 09*/ console.log('Exercicio 09');notas(28);notas(40);notas(62);notas(87);
/* exercicio 10*/ console.log('Exercicio 10 - 9 é divisivel por 3 '+divisiveisPor3(9)+' 19 é divisivel por 3 '+divisiveisPor3(19)); 
/* exercicio 11*/ console.log('Exercicio 11 - ano de 2020 '+defineAnoBisexto(2020)+' ano de 2022 é bisexto '+defineAnoBisexto(2022))
/* exercicio 12*/ console.log('Exercicio 12 - fatorial de 5 é '+fatorial(5)+'fatorial de 18 é '+fatorial(18)) 
/* exercicio 13*/ console.log('Exercicio 13 - 7 é um dia '+defineTipoDia(7)+' 4 é um dia '+defineTipoDia(4))
/* exercicio 14*/ console.log('Exercicio 14 - A fruta Maça - '+qualAFruta('maça')+' a fruta kiwi - '+qualAFruta('kiwi')+' a fruta melancia '+qualAFruta('melancia')+' a fruta bergamota '+qualAFruta('bergamota'))
/* exercicio 15*/ console.log('Exercicio 15 - O carro é hatch - '+qualCarro('hatch')+' O carro é sedans - '+qualCarro('sedans')+' O carro é motocicletas - '+qualCarro('motocicletas')+' O carro é caminhonetes - '+qualCarro('caminhonetes')+' O carro é utilitarios - '+qualCarro('utilitarios'))
/* exercicio 16*/ console.log('Exercicio 16 - A operacao e 2 + 2 = '+calculadora(2, '+', 2)+' A operacao e 3 - 2 = '+calculadora(3, '-', 2)+' A operacao e 4 * 4 = '+calculadora(4, '*', 4)+' A operacao e 9 / 3 = '+calculadora(9, '/', 3))
/* exercicio 17*/ console.log('Exercicio 17 - Aumento de salrio pelo plano de trabalho, plano a='+calculaNovoSalario(5000,'a')+' Plano b '+calculaNovoSalario(5000,'b')+' Plano c '+calculaNovoSalario(5000,'c'))
/* exercicio 18*/ console.log('Exercicio 17 - Ler de 0 a 10 9='+ler0a10(9)+' 8='+ler0a10(8)+' 7='+ler0a10(7))
/* exercicio 19*/ console.log('Exercicio 19 - Lancheria'+lancheria(100,2)+' '+lancheria(400,3))
/* exercicio 20*/ console.log('Exercicio 20 - Caixa eletronico saque de 153 '+sacarDinheiro(153))
/* exercicio 21*/ console.log('Exercicio 21 - valor plano de saude valor do davi R$'+planoSaude(3)+' valor para 25 anos R$'+planoSaude(25)+'valor Cristiano R$'+planoSaude(41)+' valor Osvaldina R$'+planoSaude(68))
/* exercicio 22*/ console.log('Exercicio 22 - valor da assosicao no mes de Maio R$'+valorMensalidadeClube(5))
/* exercicio 23*/ console.log('Exercicio 23 - Calculo notas do aluno '+notasAluno(100,2,3,4)+notasAluno(200, 8,9,7))
/* exercicio 24*/ console.log('Exercicio 24 - Hello world 11 '+helloWorld11())
/* exercicio 25*/ console.log('Exercicio 25 - Numeros na tela '+numerosNaTela())
/* exercicio 26*/ console.log('Exercicio 26 - Pares até 100 '+paresAte100())
/* exercicio 27*/ console.log('Exercicio 27 - Taxa de crescimento crianças '+calcularCrescimento(150, 2, 130, 4))
/* exercicio 28*/ console.log('Exercicio 28 - Quantidade pares e impares '+paresImpares([1,2,3,4,5,6,7,8,9,10,11]))
/* exercicio 29*/ console.log('Exercicio 29 - quantos de 10 a 20 '+de10A20([11,12,13,14,16,25,26,27,25,29]))
/* exercicio 30*/ console.log('Exercicio 30 - Maior e menor '+maiorMenor([1,516,2,58,69,14,587,78,62,32,54,78,99,45,200]))
/* exercicio 31*/ console.log('Exercicio 31 - Contagem de Negativos '+contaNegativos([1,516,2,58,69,14,200]))
/* exercicio 32*/ console.log('Exercicio 32 - Média aritimética '+mediaAritimetica([1,516,2,58,69,14,200]))
/* exercicio 33*/ console.log('Exercicio 33 - União de vetores '+unirVetores([1,516,2,58],['João','Maria','José','Jorge'],[5.1,6.9,9.8,5.4]))
/* exercicio 34*/ console.log('Exercicio 34 - Comparacao Strings '+comparaStrings('joão','JOÃO')+' '+comparaStrings('João','Maria'))
/* exercicio 35*/ console.log('Exercicio 35 - União de vetores '+unirVetoresPush([1,2,3,4,5],[6,7,8,9,10]))
/* exercicio 36*/ console.log('Exercicio 36 - Multiplica 5 vezes ou mais '+multiplica5(1,2,3,4,5)+' '+multiplica5(0,1,2,3,4,5))
/* exercicio 37*/ console.log('Exercicio 37 - Progressao arimimetica e geometrica '+progressaoAritimetica(10, 10, 15)+' '+progressaoGeometrica(10, 5, 3))
/* exercicio 38*/ console.log('Exercicio 38 - Imprime sequencia impares '+imprimeImpares(8,80)) 
/* exercicio 39*/ console.log('Exercicio 39 - troca de posições vetores '+trocaValores([1, 2, 3], [4, 5, 6]))
/* exercicio 40*/ console.log('Exercicio 40 - Conceitos notas '+conceituarNotas([10, 13, 9, 8.2, 2.5, 7.7, 6.8]))


