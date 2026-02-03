// identificador de sinais -/+ ou 0 
//verificar se o sinal é positivo ou negativo ou 0 e imprimir as respostas

// if

/*
let number = 1;

if ( number > 0) {
    console.log(`esse numero é POSITIVO`)
} else if (number < 0) {
    console.log( `esse numero é NEGATIVO`)
} else {
    console.log(`esse numero é ${number}`)
}
 console.log (`fim`)
*/


 //VERIFICADOR SE É DIVISEIVEL POR 3

 /*
 for (let i = 1; i <= 30; i++) {


 if (i % 3 == 0) {
    console.log(`esse numero ${i} é divisivel por 3`)
    }    
 }
*/

let capital_inicial = 1000; //reais

let taxa_anual = 10; //% taxa por ano
let taxa_mensal = taxa_anual / 12; //taxa em meses

let total_De_anos_investido = 3; //anos investidos
let total_de_meses = total_De_anos_investido * 12;  // em meses envestidos
let montante = capital_inicial;


for (let i = 1; i <= total_De_anos_investido; i++ ) {

    montante = capital_inicial * ( 1 + taxa_anual)
}
console.log( `depois de ${total_De_anos_investido} anos, ou  ${total_de_meses} em meses investido. seu investimento vai ser de: ${montante} `)


 