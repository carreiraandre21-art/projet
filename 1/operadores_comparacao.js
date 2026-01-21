//igual ? ( == )

let num1 = 10;
let num2 = '10';

//console.log (num1 == num2); // true pq o valor é igual, mesmo sendo tipos diferentes


//------------------------------------------------------------------------------------



//estritamente igual ?  ( === )

let num3 = 10;
let num4 = '10';

//console.log (num3 === num4); // false pq o valor é igual, mas!  o tipo é diferente


//------------------------------------------------------------------------------------



// diferente ? ( != )

let num5 = 10;
let num6 = 20; 
let num = 10

//console.log ( num5 != num6); // true pq os valores são diferentes

//console.log ( num5 != num); // false pq os valores são iguais


//------------------------------------------------------------------------------------


// estritamente diferente ? ( !== )

let num7 = 10;
let num8 = '10';
let num9 = 10;

//console.log ( num7 !== num8); // true pq os valores são iguais, mas! o tipo é diferente
//console.log ( num7 !== num9); // false pq os valores e tipos são iguais e do mesmo tipo


//------------------------------------------------------------------------------------


// maior que ? ( > ) 

let num10 = 15;
let num11 = 10;

console.log ( num10 > num11 ); // true pq 15 é maior que 10


//------------------------------------------------------------------------------------


// menor que ? ( < )

let num12 = 5;
let num13 = 10;

//onsole.log ( num13 < num12 ); // false pq 10 não é menor que 5


//------------------------------------------------------------------------------------


// maior ou igual que ? ( >= )

let num14 = 20;
let num15 = 20;

//console.log ( num14 >= num15 ); // true pq 20 é igual a 20



//------------------------------------------------------------------------------------


// menor ou igual que ? ( <= )

let num16 = 8;
let num17 = 12; 

//console.log ( num17 <= num16 ); // false pq 12 não é menor nem igual a 8



//------------------------------------------------------------------------------------



//exemplo de uso em condicional

let idade = 18;

if ( idade >= 18 ) {
    console.log ( "você é maior de idade" );
} else {
    console.log ( "você é menor de idade" );
}



//------------------------------------------------------------------------------------


//exemplo de uso em condicional 2

let nota = 65;


if ( nota >= 70 ) {
    console.log ( "aprovado" );
} else {
    console.log ( "reprovado" );
}



//------------------------------------------------------------------------------------



//exemplo de uso em condicional 3

// &&  OPERADRES LOGICOS é usado para verificar se duas condições são verdadeiras ao mesmo tempo. 

let temperatura = 19;


if ( temperatura < 20 ) {
    console.log ( "frio" );
} else if ( temperatura >= 20 && temperatura <= 30 ) {
    console.log ( "agradável" );
} else {
    console.log ( "quente" );
}
