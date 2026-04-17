

const sala2 = ["Andre" , "Joao" , "Gustavo" , "Luiz"]


const buscaAluno = sala2.findIndex((aluno) => {
    return aluno === "Jo"
})

//console.log(buscaAluno)


const resultado = sala2.map ((aluno ) => {
    return aluno + " Online "
});

//console.log(resultado.sort().join( " - "))


// o MAP ELE CRIA UMA NOVA ARRAY IMPEDINDO A MUDANCA DO ARRAY ORIGINAL 
// JA O FOREACH ELE PERCORRE O ARRAY INTEIRO COMO UM LOOP 
// E ELE NAO ENTRA EM VARIAVEIS 




sala2.forEach((aluno) => {
     return console.log(aluno + " Online ");
});


