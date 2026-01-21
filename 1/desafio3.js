//troca de valores 

let a = 10;
let b = 20;

console.log ( " antes da troca: " + " a = " + a + " e b = " + b );
console.log ( `depois da troca: a = ${b} e b = ${a}`);

//ou usar - e + 

a = a + b; //30
b = a - b; // 30 - 10 = 20 
a = a - b; // 30 - 20 = 10 
console.log (`usando a soma e a subtracao o resultado é:`)
console.log ( `a é igual a = ${a} e b é igual a = ${b} `)
