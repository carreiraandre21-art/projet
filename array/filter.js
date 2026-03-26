// filter - find 

const numeros = [1 , 5 , 12, 20 , 250]


let maior = numeros.filter ((numeros) => {
    return numeros > 10
})

console.log(maior) 

// retorna apenas se tiver dentro de uma variavel 

// podemos usar o if tbm 

let outromaior = numeros.filter (
    (numeros) => {
        if ( numeros >= 10 ) {
            return numeros
        }
    }
)

console.log (outromaior)

const nomes = [ "gato" , "cachorro" , "elefante" , "girafa", "gato"]

let maior5 = nomes.filter(
    (nomes) => {
        if (nomes.length > 5 ) {
        return nomes
    }
  }
)

console.log(nomes.sort())

console.log(maior5)


// find 

const nome = ["Andre" , "Fernanda" , "Bettina" ];

let buscaNome = nome.find (
    (nome, index) => {
        if (nome == "Andre") {
            console.log(`o ${nome} esta na posicao ${index}`); // pegamos a posicao 
            return nome
        }
    }
)

console.log(buscaNome); 


