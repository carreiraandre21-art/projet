//funcoes 

//function 

function mostraNome () {
    console.log("ola estou testando function")
}

mostraNome();

function numeroAleatorio () {
    console.log(Math.random()) //aqui ele vai gerar um numero aleatorio, usamos esse "Math.random" matematica aleatorio que vai fazer isso
    
} 

numeroAleatorio();


function gerarNumeroAleatorio () {
    return Math.random();
}

let numero = gerarNumeroAleatorio(); // aqui estamos armazenando o valor retornado pela funcao na variavel numero

console.log(numero)

// aqui vamos gerar um numero aleatorio entre 0 e 10

let numeroDezena = gerarNumeroAleatorio() * 10; // aqui estamos multiplicando o numero aleatorio por 10 para gerar um numero entre 0 e 10

console.log(numeroDezena.toFixed(0)); // o toFixed(0) vai arredondar o numero para 0 casas decimais, ou seja, um numero inteiro

// centenas 

let numeroCentena = gerarNumeroAleatorio() * 100; // aqui estamos multiplicando o numero aleatorio por 100 para gerar um numero entre 0 e 100

console.log(numeroCentena.toFixed(0)); // o toFixed(0) vai arredondar o numero para 0 casas decimais, ou seja, um numero inteiro