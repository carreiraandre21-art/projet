const numeros = [1, 10 , 15, 20];

///////////////////////////////////////////////////// add e remove itens do arrey /////////////////////////////////////////////////////
// adicionando um novo valor no array

// numeros.push (25); // add no final do arrey

// console.log(numeros);  // [1, 5, 10, 15, 20, 25]



// numeros.push ("lucas"); // posso add nomes tbm

// console.log(numeros);  //  [1, 5, 10, 15, 20, 25, "lucas"]



// posso remover o ultimo item do arrey com pop

// numeros.pop(); // remove o ultimo item do arrey

 console.log(numeros);  // [1, 5, 10, 15]


///////////////////////////////////////////// lista de comandos array /////////////////////////////////////////////////////

/*
push - add no final do arrey
pop - remove o ultimo item do arrey

shift - remove o primeiro item do arrey
unshift - add no inicio do arrey
*/






// removendo o primeiro item do arrey com shift

// numeros.shift(); // remove o primeiro item do arrey 

// console.log(numeros);  // [5, 10, 15, 20]      


// add um item no inicio do arrey com unshift

// numeros.unshift(2); // add no inicio do arrey
// console.log(numeros);  // [2, 5, 10, 15, 20]


numeros.some (n => n < 20) ? console.log("tem numeros menores que 20") : console.log("nao tem numeros menores que 20"); 

// some - verifica se algum item do arrey satisfaz a condição
// every - verifica se todos os itens do arrey satisfazem a condição
// retorna true ou false


// podemos usar unshift para mostrar o valor do comeco do arrey

// e shift para mostrar o valor do final do arrey

let c = numeros.shift(); // mostra o valor do começo do arrey
console.log(c);


let f = numeros.pop();  //e pop() mostra o valor do final do arrey
console.log(f);
