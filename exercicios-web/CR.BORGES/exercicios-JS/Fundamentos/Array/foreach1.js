const aprovados=['Agatha','Aldo','Daniel','Raquel']
aprovados.forEach(
    function (nome, indice){ //cria uam funcção de callback para iterar todos os itens do array
        console.log(`${indice+1}) ${nome}`)
    })

aprovados.forEach(nome => console.log(nome))//faz uma arow function que iterar o array e para cada elemento ele imprime o nome

const exibirAprovados=aprovado => console.log(aprovado)//cria uma function que para elemento do array vai chamar uma funcção quye eu dei um nome
aprovados.forEach(exibirAprovados)

