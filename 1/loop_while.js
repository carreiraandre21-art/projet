// while (ENQUANTO)= é usado quando voce quer repetir um bloco de codigo enquanto aquela condicao for VERDADEIRA

// primeiro exemplo 

    let a = 1;

    while (a <= 10 ) { //enquanto o "a"  for verdadeiro (maior ou igual a 10) vai ficar repetindo 
       a++;// para toda vez que repetir  acrescentar 1 numero
       //console.log("primeiro teste com WHILE = " + a); 
    }


// segundo exemplo 

        let valor = 0;

        while (valor <30) { //enquanto o "valor"  for verdadeiro (menor que 30) vai ficar repetindo 
            valor += 2; // acrecento de 2 em 2 quando repete
              // console.log(valor)
        }   


// terceiro exemplo 


        let contador =  0;

        while ( contador < 140) { // contador é - que 140 ? se sim. le novamente o codigo
            contador += 10; //toda vez que passar aqui  acrecenta 10 ao CONTADOR

            if (contador == 100) {  // CONTADOR == 100? se sim exibir o bloco de codigo do IF ""aqui é o centro"
                //console.log(`aqui é o centro ${contador}`);
            }

            //console.log (contador); //console log novamente pra continuar mostrando até o numero pedido que é o 140 !!pois fechamos o {} entao adicionamos novamnete 

        }
    


 // quarto exemplo DO WHILE diferenca



          let b = 1; 

    //while (b <= 0 ) { //o while vai ler e vai ver que não é verdadeiro e não vai executar o bloco
     //  b++;
       //console.log(a); // nem mostrar pois nao tem oque mostrar pois é false 
   // }

    // DO WHILE ele ja vai ler primeiro pra depois ver a condicao ! pelo menos 1 vaz 


    do{        // abirmos o DO primeiro que é onde ele vai exeutar o bloco que queremos que ele faça

     console.log( b) 
     b++; 
      }     // pra depois colocarmos para ele comparar a CONDICAO, mais ele ja foi mostrado
         while (b <= 0) //mesmo sendo falsa execulta 1 vez, e depois  para.
        