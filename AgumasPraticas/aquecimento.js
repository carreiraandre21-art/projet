/*
let temp = 0;


function andre () {
    console.log("André está aquecendo!");
  
 
while (true) {

   
    if (temp >= 20) {
        console.log("Aquecimento concluído!");
    break;
    }
    
    else {
        temp++;
        console.log(`Tempo atual: ${temp}, precisa de ${15 - temp} para concluir o aquecimento.`);
    }
    


}

}

andre();
*/

// treinando switch case dias da semana

function diaDaSemana () {
    return dia = 1 ;
}


let semana = diaDaSemana();    


while (semana < 5) {
    semana++;
}


switch (semana) {
    case 1: 
    console.log(`hoje é segunda-feira`);
    break;

    case 2:
    console.log(`hoje é terça-feira`);
    break;

    case 3:
    console.log(`hoje é quarta-feira`);
    break;  
    case 4:
    console.log(`hoje é quinta-feira`);
    break;

    case 5:
    console.log(`hoje é sexta-feira`);
    break;

    case 6:
    console.log(`hoje é sabado`);
    break;

    case 7:
    console.log(`hoje é domingo`);
    break;

    default:
    console.log(`dia invalido`);
    break;
}