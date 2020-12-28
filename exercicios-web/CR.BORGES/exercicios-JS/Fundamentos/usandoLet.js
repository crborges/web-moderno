var numero=1
{
    let numero=2// o let tem escopo dentro do bloco e vai usar o valor dentro do bloco
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)// ele vai producar o do escopo mais abrangente que é o de fora

//variaveis com var tem escopo global e de funcção
//variaveis com let tem escopo global, de função e de bloco(sem função)