//funcao com  parametros e com retorno

//     PRIMEIROS 2 EXEMPLOS DE CHAMAR A FUNCAO E MOSTRAR O PARAMETRO

/*

function mostrarNome (nome) {
    return `O nome é ${nome}`;
}

const nome1 = mostrarNome ('João');
const nome2 = mostrarNome ('Maria');

console.log(nome1);

*/

//EX 2

/*
function nome (nome) {
    console.log( `O nome é ${nome}`);
}                               

nome ('João');

*/

// TIRAR MEDIDAS E FAZER COM RETORNO


function media (nota1, nota2, nota3, nome) {

    let resultado = (nota1 + nota2 + nota3) / 3;
    return console.log(`a media do aluno ${nome} é de ${Math.round(resultado)}`);
 //                                                           || isso aqui vai fazer em que o numero seja ARRONDADO acima de 0.5 e 
//                                         abaixo de 0.5 seja arredondado para baixo

}


// e o ${Math.round(resultado)}`); // arredonda para o mais próximo 

media (5, 5, 5.5, 'Andre');


//ISSO É BOM PORQUE EM CASO DE ALTERAÇÃO DE NOTAS, SÓ ALTERA AQUI E NA FUNÇÃO, NÃO PRECISA ALTERAR VÁRIAS VEZES PELO CÓDIGO

