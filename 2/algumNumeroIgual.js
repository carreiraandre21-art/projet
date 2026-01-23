// para saber se tem um nuemro igual ou uma letra igual usamos o INCLUDES

let a = 13

for (let i = 1; i <= a; i++) {



     if ( i.toString().includes('3')) {
    console.log("aqui tem um 3");
    }
    else     console.log(i);


}

// .toString() transforma o numero em string para poder usar o includes

// .includes() verifica se tem o numero ou letra dentro da string



// Números que contenham o dígito "3" mas não sejam divisíveis por 3 ou 7 vão produzir Almost Fizz



console.log("Welcome to FizzBuzz!")

for (let i = 1; i <= num; i++) {

let fz = i % 3;
let bz = i % 7;


 if ( fz === 0 && bz === 0 ) {
    console.log("FizzBuzz")
 }
 else if ( i.toString().includes('3') &&  fz !== 0 && bz !== 0 ) {
    console.log("Almost Fizz")
 }
 else if ( fz === 0 ) {
    console.log("Fizz") 
 } 
 else if ( bz === 0) {
    console.log("Buzz")
 }
 else console.log(i)
 
}


