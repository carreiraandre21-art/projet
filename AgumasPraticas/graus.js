// F= (C * 1,8) +32)

//calculadora de graus celcius para Fahrenheit



let tempC = 30;
let tempF = ((tempC * 1.8 ) + 32); 

console.log(`essa é a temperatura de agora em Fahrenheit: ${tempF}`);

if ( tempF >= 90 ) {
    console.log( `a temperatura esta elevada, tome agua`)
} else if ( tempF <= 64 ) { 
    console.log( `muito frio, fique em casa `)
}  else {
    console.log ( `esta normal vai trabaia caraio`)
}
