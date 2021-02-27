//cadeia de prototipos(prototype chain)
Object.prototype.atr0='0'// não deve ser feito pois pode mexer no escopo global
const avo ={atr01: 'A'}
const pai ={__proto__ : avo ,atr02: 'B',atr03: '3'} //a forma de faze herança no js é usar a palavra reservada __proto__ e dizerque é o pai daquel objeto
const filho ={__proto__ : pai ,atr03: 'C'}

console.log(filho.atr01)//vai pegar esse  atributo la do avo
console.log(filho.atr0)//esse ele pegou la de object que setei um na marra
console.log(filho.atr0,filho.atr01,filho.atr02,filho.atr03)//a atributo 3 ele pegou o do filho pois o filho sobrescreveu oa tributo 3 do pai 


const carro ={
    velAtual:0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual<= this.velMax){ this.velAtual+=delta}
        else {this.velAtual+=this.velMax}
    }, 
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h` 
    }
}

const ferrari ={
    modelo: 'F40',
    velMax: 324 //esse valor vai sobrescrever o valor da classe 
}
const volvo = {
    modelo:'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

//setando via funcao a herançla dos obejto (ferrari vaira um carro)
Object.setPrototypeOf(ferrari,carro)//o obejhto filho e depois seu pai
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)//mostra assimso os dados do obejto ferrari e nao do seu pai 
console.log(volvo)



volvo.aceleraMais(100)//chama o metodo do pai 
console.log(volvo.status())

ferrari.aceleraMais(300)// ferrari sobrescreveu os 200 maximo de carro pelo seu de 324
console.log(ferrari.status())
