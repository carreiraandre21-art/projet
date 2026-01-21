//calculadora de juros simples 
//formula : J = C * i * t 
// J = juros
// C = capital inicial
// i = taxa de juros 
// t = tempo de investimento

const capitalInicial = 10000; // valor inicial investido
const taxaJuros = 12; // taxa de juros mensal
const tempoInvestimento = 12; // tempo em meses 

let vJ = taxaJuros / 100; // convertendo a taxa de juros para decimal



let valorFinal = capitalInicial * vJ * tempoInvestimento;

let rendimentoMensal = valorFinal / tempoInvestimento;


console.log (`o valor final de ${tempoInvestimento} meses, com juros é de ${valorFinal + capitalInicial} reais`);

console.log (`o valor do rendimento mensal é de ${rendimentoMensal} reais`);