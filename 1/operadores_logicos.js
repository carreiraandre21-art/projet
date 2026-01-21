//  OPERADRES LOGICOS 


// && ele é usado para verificar se DUAS condições são verdadeiras ao mesmo tempo. vemos ele como um "AND" lógico.

const freteGratis = true;
const estoque = true; 


//console.log(freteGratis && /*and ou e*/ estoque); // true pq as duas condições são verdadeiras
// se uma das condições fosse falsa o resultado seria false


let valor = 10;

if (valor >= 100) {
    valor = true
} else {
    valor = false
}

//console.log(valor && estoque); // false pq valor é false e estoque é true, mas as duas condições precisam ser verdadeiras para o resultado ser true

// || ele é usado para verificar se PELO MENOS UMA condição é verdadeira. vemos ele como um "OR" ou "OU" lógico.

//console.log(freteGratis || /*or*/ valor); // true pq pelo menos uma das condições é verdadeira ! mesmo que valor é false 


// OPERADOR NOT ! ele inverte o valor booleano de uma expressão. Se a expressão for verdadeira, o operador NOT a torna falsa, e vice-versa.

const teste = false;

console.log(!teste); // true pq teste é false e o operador NOT inverte o valor

console.log(!freteGratis); // false pq freteGratis é true e o operador NOT inverte o valor

// dupla negação !! ele é usado para converter um valor em seu equivalente booleano.

const nome = "João"; // o !! converte a string "João" em true, pq strings não vazias são consideradas verdadeira 
console.log(!!nome); // true

const vazio = ""; // o !! converte a string vazia em false, pq strings vazias são consideradas falsas
console.log(!!vazio); // false




