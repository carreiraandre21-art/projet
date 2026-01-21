// sorte na raspadinha

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                                                    
function gerador () {
    return Math.random().toFixed(2);       // AQUI GERA UM NUMERO ALEATORIO EX > (0.35)
}

let geradorRaspadinha = gerador();      

const NumAleatorio = geradorRaspadinha * 100;   //AQUI VAI TRANSFORMA EM DEZENA                    // AQUI É O GERADOR DE NUMEROS ALEATORIOS 



//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


const numeroEscolhido = 35;                 // ESCOLHA UM NUMERO



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


let i = 0;          // AQUI DECLAREI O I PARA USAR NO LOOP COMO SE FOSSE UM CONTADOR DE CHANCES

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//                                                            ESSE É O NOSSO LOOP !


while (NumAleatorio.toFixed(0) != numeroEscolhido.toFixed(0) && i < 100) {    // AQUI VAI COMPARAR (ENQUANTO O NumAleatorio É DIFERENTE DE numeroescolhido)" vai repetir o laço



    let NumAleatorio = gerador() * 100;   // AQUI VAI EXECULTAR UM NOVO GERADOR COM OUTRO NUMERO POIS A FUNCAO FOI CHAMADA DNV FAZENDO COM O NUMERO ALEATORIO ACERTAR AUTOMATICO
    

       if (NumAleatorio == numeroEscolhido) {   // AQUI NO IF (SE O NumAleatorio for identico ao numeroEscolhido) VAI EXECULTAR ESSE CODIGO DO (IF) E QUANDO ACERTAR VAI LER E PARAR NO BREAK
            console.log(`acertou o numero ${numeroEscolhido}!`) 
        break;      // AQUI QUANDO ELE ACERTA ELE BRECA PARA NÃO FICAR NO LOOP INFINITO. POIS TEM O ELSE E SE NÃO TIVERMOS O BREAK VAI LER INFINITO O ELSE

    } else {                    //CASO NÃO ACERTE O NUMERO LE AQUI ATE ACERTAR

       i++;                     // I++ PARA CONTAR QUANTAS VEZES FOI TENTADO, SEMPRE QUE ERRAR EXECULTAS AQUI ADICIONANDO 1 NUMERO AO I, FAZENDO COM QUE MARQUE O TANTO DE ERROS

        console.log(".");        // MOSTRA PONTO ENQUANTO TENTA ACERTAR

        
    }
    
}                           //BEM AQUI ACABA O LOOP (while)
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                      TREINANDO SWITCH 
switch (i) {
            case 100:      // como coloquei o i, quando o i for a casa que coloquei vai ler aquilo que esta nela
            console.log(`tentativa nao permitida depois de ${i}`)                   // QUANDO CHEGAR A CASA 100 MOSTRA ESSA MSG, E A ULTIMA CASA POIS O WHILE VAI SO ATE 100
            break;     //AQUI BRECA E VAI PRA PROXIMA
                         
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                      aqui o IF vai confirmar se você acertou ou errou 
//              se for menor que 100 você acertou pois saiu do loop do while antes de bater 100 tentativas
//              se for menor que 100, você não acertou no loop, o loop terminou pois vai so ate 100 e voçê caiu aqui. 


i > 100 ? console.log(`tentativas esgotadas ! (${i})`) : 
 console.log(`Usou (${i}) tentativas`)



