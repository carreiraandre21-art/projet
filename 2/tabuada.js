// F= (C * 1,8) +32)

//calculadora de graus celcius para Fahrenheit


/*
let tempC = 30;
let tempF = ((tempC * 1.8 ) + 32); 

console.log(`essa é a temperatura de agora em Fahrenheit: ${tempF}`);

if ( tempF >= 90 ) {
    console.log( `a temperatura esta elevada, tome agua`)
} else if ( tempF <= 64 ) { 
    console.log( `muito frio, fique em casa `)
}  else {
    console.log ( `esta normal vai trabaialhar` )
}
*/



console.log ( `digite sua senha para acessar a tabuada:` )
senha = 1234;

if ( senha == 1234 ) {
    console.log ( `senha correta, acesse a tabuada` ) 
    } else {
        console.log ( `senha incorreta, tente novamente` )
    }

console.log ( `----- calculadora de tabuada -----` )
let tabuada, i;

 tabuada = 11;
 i;

if ( tabuada <= 20 ) {
    for ( i = 0; i <= 10; i++ ) {
        console.log ( `${tabuada} x ${i} = ${tabuada * i}` ) 
    }
} else {
    console.log ( `seu nuemero é invalido, apenas de 0 a 10` )
     } 

