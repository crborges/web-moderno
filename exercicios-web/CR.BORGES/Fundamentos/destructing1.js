//novo recruso após o ES6 DE 2015
const pessoa= {
    nome: 'Ana',
    idade: 5,
    endereco:  {
        logradouro: 'Rua ABC',
        numero:1000
    }
}
//vou criar o operador destruction (desestruturaçaão)
const {nome, idade} = pessoa
console.log(nome,idade)//aqui estão disponiveis nome e idade da estrutura de pessoa
const {nome: n, idade: i} = pessoa //desestruturei passando outro noem parea as variaveis
console.log(n,i)//aparece os dados com os novos nomes
const {sobrenome, bemHumorada=true}=pessoa//tira dados que aind anão existem no objeto
console.log(sobrenome,bemHumorada)//aparece os valores tirados de dentro
const {endereco : {logradouro,numero,cep}} =pessoa// extraindo dados de endereço(objeto dentro do objeto)
console.log(logradouro,numero,cep)