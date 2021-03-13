const pessoa ={
    saudacao: "Bom dia!",
    falar (){
        console.log(this.saudacao)
    }
}

pessoa.falar();
const falar = pessoa.falar
falar()// da undefined porque enstew contexto nao tem o metodo falar
const falarDePessoa = pessoa.falar.bind(pessoa)// posso chamar o falar original com um bind passando o objeto pessoa para ele sabe de quem esta se falando
falarDePessoa()// ao chamar o falr de pessoa ele sabede qual referencia estou falando 
