function Pessoa(){
    this.idade=0
    const self = this
    setInterval(function(){
        self.idade++   // posso usar self que aponta para o this para driblar a variação do this₢
        console.log(self.idade)
    }/*.bind(this)*/,1000)//uma forma de arramar para que ele chame o this que eu quero é bindar com o this ou seja o objeto atual
    
}

new Pessoa
 