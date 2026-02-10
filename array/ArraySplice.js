// SPLICE 

/*  
    OQUE vamos precisar saber para usar 

1  -  INDEX = A POSICAO QUE APARTIR DALI VAMOS MODIFICAR
2  -  QUANTIDADE = A QUANTIDADE DE ITENS QUE VAMOS SELECIONAR A PARTIR DAQUELA POSICAO 
3  (OPCIONAL) -  ELEMENTOS QUE DESEJA ADD NAQUELE INDEX

*/
//                   0   1   2   3   4      INDEX = POSICAO
const spliceTeste = [1 , 2 , 3 , 4 , 5,]

//                  2 É A POSIÇÃO DO ARRAY QUE É (3) VAMOS PEGAR A PARTIR DELA
spliceTeste.splice( 2, 2 )
//                     2 - É A QUANTIDADE DE ITENS QUE VAMOS USAR A PARTIR DO INDEX Q É O 3 - ( O NUMERO DO INDEX CONTA)

console.log(spliceTeste) 

const nomes = ['Ana' , 'Ju' , 'Leo' , 'Paula'];


//procurar o nome 
const procura = nomes.indexOf('Leo');  // procura onde esta o leo e retorna a posição dele

let resultado = nomes.splice(procura, 1, 'André'); // pega o lugar do leo q achamos com idex e remove ele e add o André no lugar do leo

console.log(nomes)

// pegar os itens que foi removildo usamos o resultado da splice = resultado = ['Leo'] - o item que foi removido do array

console.log(`o nome do item removido foi: ${resultado[0]}`)