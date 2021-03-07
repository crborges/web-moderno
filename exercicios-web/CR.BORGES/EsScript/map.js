const tecnologias = new Map()
tecnologias.set('react',{framework: false})
tecnologias.set('angular',{framework: true})

//console.log(tecnologias.react)// essa forma é errada de tentar acessar o array ele dar undefined
console.log(tecnologias.get('react'))//essa é a forma correta dando um gewt de qual chave eu quero acessar
console.log(tecnologias.get('react').framework)//com o objeto retornsod eu posso acesar as propriedades dele pois ja o tenho

const chavesVariadas = new Map([ //vou criar ummapr com chaves vriadas
    [function(){},'Função'], //uma funcção de chave
    [{},'Objeto'],           //um objeto como chave   
    [123,'Número']           //um numeo como chave   
])

chavesVariadas.forEach((key,value)=>{  //aqui vou mostar os valores desse map
    console.log(key,value)
})
console.log(chavesVariadas.has(123))//verificar se um determinado valor esta dentor do map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))//ao ver se a memsa chave esta agora da falso porque tiramos
console.log(chavesVariadas.size)//mostra o tamanho dop map

chavesVariadas.set(123,'a')//eu nãocosnigo ter chaves repetidas ao tentar colcoar uma chave que ja existe ele sobrecarrega no vlaor passado
chavesVariadas.set(123,'b')
chavesVariadas.set(456,'b')//valores de atributos pode ter repedido sóa a chave que é unica
console.log(chavesVariadas)
