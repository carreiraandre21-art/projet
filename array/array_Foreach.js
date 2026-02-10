
//  INCLUDE  - verifica se um elemento está presente no array e retorna TRUE ou FALSE

const frutas = ['maçã', 'banana', 'laranja', 'uva'];

console.log(frutas.includes('banana')); // true
console.log(frutas.includes('abacaxi')); // false


// podemos usar assim tbm

frutas.includes('uva') ? console.log("tem uva no array") : console.log("não tem uva no array");


// FOREACH - executa uma função para cada elemento do array

const Alunos = ['João', 'Maria', 'Pedro', 'Ana'];

Alunos.forEach(function () {
    console.log("Olá, alunos!") // aqui ele vai imprimir "Olá, alunos!" para cada elemento do array, ou seja, 4 vezes
})

