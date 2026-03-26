

// Funçoes com parametros

function mostraNome(nome) {
    console.log(`Seja bem vindo ${nome} ao sistema`)
}



const nota1 = 8;
const nota2 = 4;
const nota3 = 7;
const nome = "Matheus";

function calculoMedia(nota1, nota2, nota3, nome) {
    let media = (nota1 + nota2 + nota3) / 3;
    return `O(A) aluno(a) ${nome} teve a média de ${media}`;
}

const mediaMatheus = calculoMedia(nota1, nota2, nota3, nome)

console.log(mediaMatheus);

const mediaFulano = calculoMedia(10, 5, 6, "Ana caroline");

console.log(mediaFulano);


// ======================
/*
const valorCapital = 2000;
const taxaJuros = 0.03 // Igual a 3%
const totalPeriodo = 12;

const jurosFinal = valorCapital * taxaJuros * totalPeriodo;

console.log(`Juros no periodo de ${totalPeriodo} meses é de ${jurosFinal} reais`);
*/

function calculadoraJuros(valorCapital, totalPeriodo) {
    const juros = 0.3; // 30%

    const jurosFinal = valorCapital * juros * totalPeriodo;
    console.log(`Juros no periodo de ${totalPeriodo} meses é de R$ ${jurosFinal} reais`)
}


calculadoraJuros(2000, 24)


calculadoraJuros(5000, 12);