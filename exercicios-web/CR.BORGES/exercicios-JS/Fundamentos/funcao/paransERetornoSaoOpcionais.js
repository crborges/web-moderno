//as vezes eu retorno e as vezes eu não retorno dados depende do valor que der
function area (largura, altura){
    const area = largura*altura
    if(area>20 ){
        console.log(`Area acima do permitido de 20 total ${area}m2`);
    }   
    else{
        return area
    }
}
//formas validas de chamar a funcao area 
console.log(area(2,2))//da forma correta e retorna correto
console.log(area(2))//com um parametro de erro de NAN
console.log(area())//Sem parametros e da erro de NAN
console.log(area(2,3,5,78,98))//Com mais parametros que o necessario  
console.log(area(5,5))//situacao em que retorna mais de 20 ele vai mostrar a msg e retornar undefined