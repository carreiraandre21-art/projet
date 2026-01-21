// praticando 1 If Else 

const nota = 10;
const nota2 = 10;
const nota3 = 2;

let media = ((nota + nota2 + nota3) /3 );
/*
if ( media >=5 && media < 8 ) {
    console.log ( `você passou de ano, mas precisa melhorar !`)
    console.log ( `sua media foi de = ${media}  `)
} else if ( media >= 8 && media <= 10 ) {
    console.log ( `parabens, voce foi incrivel ! você passou de ano `)
    console.log ( `sua media foi de = ${media}   `)
} else {
    console.log ( `você reprovou de ano `)
    console.log ( `sua media foi de = ${media}  `)
}
*/

// pratica 2 

const produto = 599;
const freteGratis = true;
/*
if ( produto >= 1000 && freteGratis) {
    console.log ( `o frete é gratis `)
} else {
    console.log ( `você tem que pagar R$ 10 reais de frete`)
}
*/
/*
if ( produto >= 500 && freteGratis) {
    console.log ( `o frete é gratis `)
} else {
    console.log ( `você tem que pagar R$ 10 reais de frete`)
}
*/


const valor = 400;
let escolhaumnumero = 0;


for (let i = 0; i <= 10000 ; ) {
    i++;
    escolhaumnumero++;

    if (escolhaumnumero == valor) {
       console.log(`esse é o numero da senha: ${escolhaumnumero}`)
    }   
    
}




  
