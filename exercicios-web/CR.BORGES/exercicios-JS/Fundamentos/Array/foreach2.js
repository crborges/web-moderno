Array.prototype.forEach2= function(callback) { //dentro do callback de array vou criar uma fucnção de foerach2
 for(let i = 0; i<this.length;i++){ //faço um for dentro do array
    callback(this[i],i,this) 
 }
}

const aprovados=['Agatha','Aldo','Daniel','Raquel']
aprovados.forEach2(
    function (nome, indice){ //cria uam funcção de callback para iterar todos os itens do array
        console.log(`${indice+1}) ${nome}`)
    })