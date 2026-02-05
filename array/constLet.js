// a constante não muda de valor, mas o conteúdo interno pode ser alterado
/*const numeros = [1, 10 , 15, 20];

console.log(numeros +" comeco"); // [1, 10, 15, 20]

numeros[0] = 5; // alterando o valor da posicao 0 do arrey

console.log(numeros+ " mudando 1 para 5 "); // [5, 10, 15, 20]

numeros.pop(); // remove o ultimo item do arrey

 console.log(numeros + " retirando o 20");  // [5, 10, 15]
*/
// conseguimos alterar o conteudo do arrey mesmo sendo uma constante


/*
let numeros2 = [1, 10 , 15, 20];

console.log(numeros2 +" comeco"); // [1, 10, 15, 20]

numeros2 = [2, 4, 6, 8]; // alterando o valor da posicao 0 do arrey

console.log(numeros2+ " mudando todo o arrey "); // [2, 4, 6, 8]

// com o let conseguimos alterar o valor da variavel completamente 
*/


// e alterar tambem o conteudo do arrey

let numeros = [1, 5 , 10, 15, 20];

console.log(numeros +" comeco"); // [1, 5, 10, 15, 20]

numeros[0] = 3; // alterando o valor da posicao 0 do arrey

console.log(numeros+ " mudando 1 para 3 "); // [3, 5, 10, 15, 20]

numeros.pop(); // remove o ultimo item do arrey

console.log(numeros + " retirando o 20");  // [3, 5, 10, 15]

