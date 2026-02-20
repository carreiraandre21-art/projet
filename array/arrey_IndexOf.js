//   JOIN - organiza os elementos de um array em uma string, separando-os por um delimitador especificado que colocar .join( " , " )
//   



const nomes = ['Ana', 'Ju', 'Leo', 'Paula'];
console.log("tradicional    " + nomes);

const nomesString = nomes.join(' - '); // o que colocar dentro do join é o que vai separar os itens do array na string
console.log("com join   " + nomesString);

// mais organizado

// os tipos vira string 

console.log(typeof nomes) // string
console.log(typeof nomesString) // string



// INDEXOF - retorna o índice da primeira ocorrência de um elemento no array, ou -1 se não for encontrado.

let procurar = "Ju"

const PosicaoNome = nomes.indexOf(procurar); // procura onde esta o leo e retorna a posição dele 
console.log(`O nome ${procurar} está na posição: ${PosicaoNome}`)

// se der -1 é porque o nome não existe no array

let Procurar2 = "Maria" 

const PosicaoNome2 = nomes.indexOf(Procurar2);
console.log(`O nome ${Procurar2} está na posição: ${PosicaoNome2}`)

// se o nome existir ele retorna a posição do nome no array, se não existir ele retorna -1 
// podemos usar um if 

if (PosicaoNome2 == -1) {
    console.log(`O nome ${Procurar2} não foi encontrado no array.`);
};




const array = [1, 2, 3, 4, 5];

const resultado = array.indexOf(3) // aqui ele vai procurar o numero 3 e retornar a posição dele no array, que é 2, porque o array começa do 0; 

console.log(array[resultado] + " é resultado so na procura do num" )  

array.splice (resultado, 1 , 10) // pega o lugar do 3 q achamos com idex e remove ele e add o 10 no lugar do 3array

array.reverse(); // inverte a ordem do array


console.log(array.join(" - ") + " é o resultado dps do splice e reverse e o join") 