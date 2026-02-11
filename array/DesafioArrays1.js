/*
// cargos da empresa 

const cargos = ["FULLSTACK", "FRONTEND", "BACKEND", "DEVOPS", "QA", "UXUI", "DATA_SCIENCE", "MOBILE", "SECURITY", "CLOUD"];

if (cargos.includes("BACKEND")) {

    let index = cargos.indexOf("BACKEND");
    let adcCargo = "TI";

    cargos.splice(index, 1 );


    console.log(cargos);
}
else console.log(cargos.join(" - "));
*/

/*
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


numeros.forEach 
(
        function(numero) 
        { 
            soma += numero;
        }
)
console.log("A soma dos números é: " + soma);
*/



// multiplos de 3


const multiplos =  [3 , 6 , 12 , 5 , 9 ,14 , 27];
// filter - cria um novo array com todos os elementos que passam no teste implementado pela função callback.

const multiplosDe3 = multiplos.filter (function (numeros) {
    return numeros % 3 === 0;
}
)

console.log(multiplosDe3. join(" - ") + " é múltiplo de 3");



//--------------------------------------------------------------------------------------------------------------------------------

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
