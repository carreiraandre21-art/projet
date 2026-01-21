// calculo de idade
// vaeriaveis  de entrada

let Dia = 21;
let mes = 8;
let ano = 2005;
const anoAtual = 2025;


let Idade = anoAtual - ano;


if ( mes < 8 ) {
    console.log ( "sua idade é: " + (Idade - 1) + " anos" );
} else if ( Dia >= 21 ) {
    console.log ( "sua idade é: " + (Idade ) + " anos" );
} else {
    console.log ( "sua idade é: " + (Idade - 1) + " anos" );
}

