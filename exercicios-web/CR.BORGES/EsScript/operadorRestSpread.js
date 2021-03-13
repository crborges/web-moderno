//operador ...rest(juntar)/spread(espalhar)
//pode ser usado como parametro de uma função

//usar spread com objeto
const funcionario ={nome:'Maria',salario:12348.99}
const clone={ativo: true,...funcionario}//estou fazendo uma operação de spread estou espalahdo os atributos de fucninario dentro de um novo objeto chamado de clone
console.log(clone)//agora clone tem uma copia do objeto fucninariuo mais o parametro que eu coloquei ali

//usar spread com array
const grupoA=['João','Pedro','Glória']
const grupoFinal=['Maria','Rafaela',...grupoA]//espalhei oos array grupoA dentro do array grupoFinal
console.log(grupoFinal)