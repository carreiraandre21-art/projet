/* 

Métodos de Array Parte 2



Arrays têm mais métodos integrados que podem nos ajudar com tarefas comuns. Aqui estão alguns deles:

sort() - ordena os elementos de um array.

reverse() - inverte a ordem dos elementos em um array.

indexOf(element) - retorna o índice da primeira ocorrência de um elemento no array, ou -1 se não for encontrado.

lastIndexOf(element) - retorna o índice da última ocorrência de um elemento no array, ou -1 se não for encontrado.

includes(element) - retorna true se o array contém o elemento especificado, caso contrário retorna false.



Aqui está um exemplo de como usar o método sort:

let myArray = ["orange", "banana", "apple"];
myArray.sort();
console.log(myArray);

Isso irá ordenar os elementos do array em ordem alfabética, resultando em ["apple", "banana", "orange"].


Exemplo do método reverse:

let myArray = [1, 2, 3, 4, 5];
myArray.reverse();
console.log(myArray);

Isso irá inverter a ordem dos elementos do array, resultando em [5, 4, 3, 2, 1].


Exemplo do método indexOf:

let myArray = [10, 20, 30, 40, 50, 30];
let index = myArray.indexOf(30);
console.log(index);

Isso irá retornar o índice da primeira ocorrência do elemento 30, que é 2.


Exemplo do método lastIndexOf:

let myArray = [10, 20, 30, 40, 50, 30];
let index = myArray.lastIndexOf(30);
console.log(index);

Isso irá retornar o índice da última ocorrência do elemento 30, que é 5.


Exemplo do método includes:

let myArray = ["apple", "banana", "orange"];
let hasBanana = myArray.includes("banana");
console.log(hasBanana);

Isso irá retornar true, pois o array contém o elemento "banana".

*/

