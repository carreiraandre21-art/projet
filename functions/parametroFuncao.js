//funcao com parametro
/*
function saudacao (nome) {  // aqui estamos criando a funcao saudacao que recebe um parametro chamado nome
 console.log (`ola, ${nome}, seja bem vindo!`); // aqui estamos retornando uma string formatada com o nome passado como parametro
}

saudacao(); // aqui estamos chamando a funcao saudacao e passando o valor "andre" como parametro, e exibindo o resultado no console

saudacao("fernanda"); // aqui estamos chamando a funcao saudacao e passando o valor "maria" como parametro, e exibindo o resultado no console
*/

let nota1 = 8;
let nota2 = 7;
let nota3 = 9;

function calcularMedia (nota1, nota2, nota3) { // aqui estamos criando a funcao calcularMedia que recebe tres parametros: nota1, nota2 e nota3
    const media = (nota1 + nota2 + nota3) / 3; // aqui estamos calculando a media das tres notas
    return media; // aqui estamos retornando a media calculada
}



const mediaAluno = calcularMedia(nota1, nota2, nota3); // aqui estamos chamando a funcao calcularMedia e passando as tres notas como parametros, e armazenando o resultado na variavel mediaAluno

console.log(`a media do aluno é: ${mediaAluno}`); // aqui estamos exibindo a media do aluno no console