/*
v e v   =>v 
v e f   =>f
f e ?   =>f

v ou ?  =>v 
f ou v  =>v
f ou f  =>f

v xor v =>f
v xor f =>v
f xor v =>v
f xor f =>f     

!v =>f
!f =>v
 
*/
function compras (trabalho1, trabaho2){
    const comprarSorvete = trabalho1 || trabaho2
    const comprarTV50POL = trabalho1 && trabaho2
    //const comprarTVc32POL = !!(trabalho1 ^ trabaho2)//operador bit a bit
    const comprarTV32POL = trabalho1 != trabaho2//simulação de um ou exclusivo(os 2 são diferentes )
    const ManterSaudavel = !comprarSorvete
    return {comprarSorvete,comprarTV50POL,comprarTV32POL,ManterSaudavel} // para objetos não preciso passar o apr chave valor so para ES6 - 2015
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))