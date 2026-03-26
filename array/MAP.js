// map 

// map(callback) - cria um novo array com os resultados da chamada de uma função para cada elemento do array.

const numeros = [1 , 6 , 9 , 13 , 20];

const duplicador = numeros.map ((Num) => {
    return Num * 2 
})

console.log(duplicador.join())



numeros.forEach ((Num) => {
    return console.log(Num * 2 )
})

