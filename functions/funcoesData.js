// FUNCAO DATA


function Data () {     // criamos a funcao Data, que vai retornar SEMPRE a data atual

    const data = new Date();    // aqui estamos criando uma nova data com o objeto Date do JavaScript, que pega a data atual do sistema
    return data.toDateString(); // aqui estamos retornando a data formatada como uma string legivel, usando o metodo toDateString()

}

console.log(Data());  // aqui estamos chamando a funcao Data e exibindo o resultado no console


const data = new Date(); // aqui estamos criando uma nova data com o objeto Date do JavaScript, que pega a data atual do sistema

console.log("horario no sistema: " + data.toDateString()); // aqui estamos exibindo a data formatada como uma string legivel, usando o metodo toDateString()

console.log("formato brasileiro: " + data.toLocaleDateString('pt-BR')); // aqui estamos exibindo a data formatada no padrao brasileiro, usando o metodo toLocaleDateString() e passando o parametro 'pt-BR' para definir o idioma

console.log("somente o ano: " + data.getFullYear()); // aqui estamos exibindo o ano atual, usando o metodo getFullYear()

console.log("mes: " + (data.getMonth() + 1) ); // aqui estamos exibindo o mes atual, usando o metodo getMonth(). Lembrando que os meses comecam do 0 (janeiro) ate 11 (dezembro), por isso somamos 1 para exibir corretamente
//mes começa janeiro no 0, ent add o    1 para mostrar corretamente

console.log("dia: " + data.getDate()); // aqui estamos exibindo o dia do mes atual, usando o metodo getDate()

console.log("dia da semana: " + data.getDay()); // aqui estamos exibindo o dia da semana atual, usando o metodo getDay(). Lembrando que os dias comecam do 0 (domingo) ate 6 (sabado)

