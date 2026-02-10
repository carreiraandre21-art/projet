//   JOIN - organiza os elementos de um array em uma string, separando-os por um delimitador especificado que colocar .join( " , " )

const nomes = ['Ana', 'Ju', 'Leo', 'Paula'];
console.log("tradicional    " + nomes);

const nomesString = nomes.join(', ');
console.log("com join   " + nomesString);

// mais organizado

// os tipos vira string 

console.log(typeof nomes) // string
console.log(typeof nomesString) // string