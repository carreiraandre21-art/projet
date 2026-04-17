 // OBJETOS 

 // SAO COLECOES = SAO RAMIFICACAO DENTRO DE UM OBJ 
 // ALUNO = IDEDA , SALA, NOME 

    const aluno = {
        nome: "Matheus",
        idade: "20 anos ",
        sala: "7° Ano ",
        cargo: "lider"
    }

aluno.cargo = "co-lider"
    

console.log(aluno.cargo)
console.log(aluno.sala)
console.log(aluno.nome)
console.log(aluno.idade)

aluno.cargo = "lider"
// da pra adicionar novas propriedades ao ALUNO 
aluno.status = true


console.log(aluno)

