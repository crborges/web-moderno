//console.log(global)
//setar algo no global(evite sempre isso só se for muito necessario)
global.minhaApp=Object.freeze(//conegelei o objeto para evitar que qq coisa mude o meu obj
    {
        saudacao(){ return 'Estou em todos os lugares'},
        nome: 'Sistema Legal'
    }
)