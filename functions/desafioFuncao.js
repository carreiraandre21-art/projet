//CRIAR UM SISTEMA DE MEDIA QUE RECEBE 3 NOTAS E UM NOME E RETORNA A MÉDIA DESSE ALUNO

//funcao com  parametros e com retorno


function calcularMedia (nota1, nota2, nota3, nome) {

    const media = (nota1 + nota2 + nota3) / 3;
    console.log(`a media do(a) aluno(a) ${nome} é de ${media.toFixed(0)} `);
    return media;

    
}

 //   calcularMedia(4, 6, 10, "Andre"); //chamando a funcao


 let joao = calcularMedia(1, 4, 5, "joao"); //chamando a funcao

 joao > 5 ? console.log (`o aluno(a) foi aprovado`) : console.log (`o aluno(a) foi reprovado`);


 let maria = calcularMedia (10, 3, 5, "maria"); //chamando a funcao

 maria > 5 ? console.log (`o aluno(a) foi aprovado`) : console.log (`o aluno(a) foi reprovado`);

 
