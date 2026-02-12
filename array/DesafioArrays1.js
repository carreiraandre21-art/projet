
// cargos da empresa 

const cargos = ["FULLSTACK", "FRONTEND", "BACKEND", "DEVOPS", "QA", "UXUI", "DATA_SCIENCE", "MOBILE", "SECURITY", "CLOUD"];

if (cargos.includes("BACKEND")) {

    let index = cargos.indexOf("BACKEND");

    cargos.splice(index, 1 );

    console.log(cargos.join( " - ")); 
}
else console.log(cargos);



// procura na lista de nomes 

const nomes = ["Alice", "Bob", "Charlie", "Henrique", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy", "Henrique"];

let nomeProcurado = "Henrique"; 

if (nomes.includes(nomeProcurado)) {
    console.log("O nome " + nomeProcurado + " está na posição " + (nomes.indexOf(nomeProcurado) + 1));
}
else  console.log("O nome " + nomeProcurado + " não está na lista");


// somar  todos numeros 

const numeros = [10, 20, 3, 24, 5];
let soma = 0;


numeros.forEach (
        function(numero)  { 
            soma += numero;
        }
)
console.log("A soma dos números é: " + soma);




// multiplos de 3


const multiplos =  [3 , 6 , 12 , 5 , 9 ,14 , 27];
// filter - cria um novo array com todos os elementos que passam no teste implementado pela função callback.

const multiplosDe3 = multiplos.filter (function (numeros) {
    return numeros % 3 === 0;
}
)

console.log(multiplosDe3. join(" - ") + " é múltiplo de 3");



//--------------------------------------------------------------------------------------------------------------------------------

//sem usar o filter

let array = [];
let errados = [];

multiplos.forEach 
(
    function (Numbers)
     {
        if (Numbers % 3 === 0 ) 
            {
                array.push(Numbers);
            }
        else  
        errados.push(Numbers);
     }
)

console.log(array.join(" - ") + " é múltiplo de 3");
console.log(errados.join(" - ") + " não é múltiplo de 3");




// fitrar tamanhos de palavras com mais de 5 letras'

const palavras = ["gato", "cachorro", "computador", "elefante", "telefone", "peixe", "leao", "floresta", "bicicleta"];

let palavrasComMaisDe5Letras = [];
let palavrasCom5LetrasOuMenos = [];

palavras.forEach 
( 
    function (palavra) 
    {
        if (palavra.length > 5 )
         {
            palavrasComMaisDe5Letras.push(palavra);
         }
         else 
            palavrasCom5LetrasOuMenos.push(palavra);
    }
)

console.log("Palavras com mais de 5 letras: " + palavrasComMaisDe5Letras.join(")-("));
console.log("Palavras com 5 letras ou menos: " + palavrasCom5LetrasOuMenos.join(")-("));




// cm filter

const palavrasComMaisDe5Letras2 = palavras.filter(function (palavra) {
    return palavra.length > 5;
});
const palavrasCom5LetrasOuMenos2 = palavras.filter(function (palavra) {
    return palavra.length <= 5;
});

console.log("FILTER Palavras com mais de 5 letras: " + palavrasComMaisDe5Letras2.join(")-("));
console.log("FILTER Palavras com 5 letras ou menos: " + palavrasCom5LetrasOuMenos2.join(")-("));