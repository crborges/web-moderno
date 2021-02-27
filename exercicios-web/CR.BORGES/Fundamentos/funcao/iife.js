/*
função auto invoicada quew é uma função que foge do escopo global
muito boa para escapar do escopo no browser que op window pois as variaveis dessa função tem o escopo local da função
no node não é tão interessante  pois as coisas dentro do node já são modularizadas
IIFE --> Immediately Invoked Function Express (Expressão de Função Imediatamente Invocada)
*/

//ao executar  esse codigo ai imediatamente ele é executado  
(function (){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()
