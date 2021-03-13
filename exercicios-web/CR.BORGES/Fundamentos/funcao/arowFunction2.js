function Pessoa(){
    this.idade=0
    setInterval(()=>{
        this.idade++ 
        console.log(this.idade)
    },1000) //  por ser uma funcao arow  ele mantem o this seja de onde for chamada 
    
}

new Pessoa
 