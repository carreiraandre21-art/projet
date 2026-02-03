// F= (C * 1,8) +32)

//calculadora de graus celcius para Fahrenheit

/*

let tempC = 30;
let tempF = ((tempC * 1.8 ) + 32); 

console.log(`essa é a temperatura de agora em Fahrenheit: ${tempF} e essa em graus celcius ${tempC}`);

if ( tempF >= 90 ) {
    console.log( `a temperatura esta elevada, tome agua`)
} else if ( tempF <= 64 ) { 
    console.log( `muito frio, fique em casa `)
}  else {
    console.log ( `esta normal vai trabaia caraio`)
}
*/

//  Db database 

const login  ="andrecarreira"
const senha = "andre12q"

let usuarioSim = "andrecarreir"; // colocar usuario para login aqui
let senhaSim = "andre12q" // colocaar senha para login aqui

let usuarioNao = "andre"; // colocar usuario aqui 
 let senhaNao = "andre" // colocar senha aqui


console.log(`você ja tem   login ? `);

let sim = "sim"; 
let nao = "nao";

let  resp1 = nao; // colocar respostas sim/nao

if (resp1 == sim) { // se for sim vai ler aqui --------------
    console.log (`coloque seu usuario e sua senha a seguir`);
  

      console.log (`coloque seu usuario;`); 
      
      if (usuarioSim === login) {
          console.log (`usuario correto! `); 
      } else {
        console.log (`usuario incorreto ! `)
      }

          console.log (`coloque sua senha;`); 


          if (senhaSim === senha) {  
            console.log (`senha correta!`);
        } else {
            console.log (`senha incorreta!`);
        }  
        
    }   
    
         if (resp1 == sim && senhaSim == senha && usuarioSim== login) {
        // Se errou o usuário, cai aqui e ACABA.
        console.log(` bem vindo de volta ${login}`); 
    } else {
         console.log (`senha ou usuario incorreto ! registrese`)
    }


    
     
 if (resp1 == nao) { //se for nao vai ler aqui----------


    console.log (`coloque seu usuario e sua  senha:`);

      console.log (`usuario:`); 
    
     
   
      console.log (`senha:`);
     
     
    
    if (usuarioNao && senhaNao ) {
     console.log (`registro concluido`);
    } else {
         console.log (`erro ! faça o regitro`);
    }
    
 }
 
 





