const fabricantes = ['Mercedes', 'Audi', 'BMW']

function  imprimir (nome, indice){  // uma funcao que para cada iteracao do array imprimi dados dele
    console.log(`${indice+1} - ${nome}`)
}
fabricantes.forEach(imprimir)// faz um laco e para cada item do laço chama uma funcao 
fabricantes.forEach(fabricante => console.log(fabricante))//o callbacke num formato arow function