const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}
function exec (){// mesmod eclarando uma outra variavel chamada de local o js não vai usar a local porque no contexto de claração da funcao original so existia a global a funcao carrega consigo o contexto onde foi declarada 
    const valor ='Local' 
    minhaFuncao()
}

exec()