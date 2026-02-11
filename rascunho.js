
/*
function benchQualityChecker(coatingThickness, isHighTraffic) {
    // Write code here

    if (coatingThickness < 50)
    return "Terrible - Replace immediately!";
    else if (coatingThickness >= 50 && coatingThickness <= 100 && isHighTraffic) 
    return "Poor - Needs recoating soon";
    else if (coatingThickness >= 50 && coatingThickness <= 100 && !isHighTraffic)
    return "Acceptable - Monitor closely"
    else if ( coatingThickness > 100 && coatingThickness <= 150)
    return "Good - No action needed";
    else (coatingThickness > 150)
    return "Excellent - Overcoated!";

}

console.log(benchQualityChecker(151, true));  // Expected output: "High Quality"

// feito direto no git 
let andre = 10; // feito mo vs

console.log(andre);




let n = 8


// Execute your function n times with a loop


function somaAte10000() {

  let soma = 0;

  for (let i = 1; i <= 10000; i++) {

    soma += i;
}

   for (let i = 0; i < n; i++) {

    let resultado = soma

    console.log(`Resultado da soma na iteração ${i + 1}: ${resultado}`);
  
}
}

somaAte10000();



let a = 5
let b = 2
// Type your code below


function soma ( num1, num2) {
    let resultado = num1 * num2;
    return resultado
}

console.log(soma(a, b)) 

function sumRange (start, end ) {

    let result = (end - start + 1) * (start + end) / 2;
    console.log(result);
}



//sumRange(4, 10);

// ouuuuuu 

function novo(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    console.log(`The sum of numbers from ${start} to ${end} is ${sum}.`);
}

// Call the function with two numbers
//novo(4, 10);


function findMax (a, b, c) {

    if (a >= b && a >= c) {
    console.log(a)
    }
     else if (b >= a && b >= c) {
    console.log(b)
    }
     else if (c >= a && c >= b) {
    console.log(c)
    }


}

findMax (2, 2, 2); 



function sigma(n) {
    // Write code here
    let soma = 0;
    for (let i = 1; i <= n; i++ ) {
        soma += i;
        
    }

    return soma;
}

let teste = sigma(5);


const resultado = teste * 2;

console.log(resultado);

let width = 5;
let height = 10;

let calculateArea = function calculateArea(width, height) {
return width * height;
}

// Don't change the lines below
console.log(calculateArea(5, 10));
console.log(calculateArea(3, 7));

weight = 70;
height = 1.75;


let calculateBMI = (weight, height) => weight / (height * height);
 
// Don't change the lines below
console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(80, 1.8));

// Write code here
let a
let sumOfEvens = (n) => {
    let a = 0;
    for( let i = 2; i <= n; i += 2){
         a += i;
    }
    return a;
} 

console.log (sumOfEvens(22));

function isValid (username, passoword) {

if ( username == "admin" ) {
    console.log(true)
}    
else if ( username == "user" && passoword == "qweasd") {
    console.log(true)
}
else 
console.log(false)

}

isValid ("not_user", "pass");

let num = 15
// Type your code below


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

function teste () {
    // Escreva o código aqui
    let values = [10, 20, 30, 40, 50]
    for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}
}

teste(1,2,3);

function values(arr) {
    // Escreva o código aqui

    for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    }
}
values([1, 2, 3, 5]);

function firstAndLast (arr) {
  
  let result = arr[0] + arr[arr.length - 1];

  console.log(result);  
}

firstAndLast([10, 20, 30, 40, 50]);

function changeElement(arr, index, newElement) {
    // Write code here
    arr[index] = newElement;
    return arr;
}


console.log (changeElement([1, 2 , 4, 6, 2, 99], 2, 99));


let nums = [5, 10, 15];
let x = nums.pop(); 
console.log(nums);

let arr = [1, 5, 10, 15];

function swapEnds(arr) {
    // Write code here
    let comeco = arr[0];
    let fim = arr[arr.length - 1]
    arr[0] = fim;
    arr[arr.length - 1] = comeco;
    return arr
}

console.log(swapEnds(arr));

let colors = ["red", "blue", "green"];

colors.push("yellow");  // add no final do arrey
let removedColor = colors.shift();  // remove o primeiro item do arrey
colors.unshift("purple"); // add no inicio do arrey
let lastColor = colors.pop(); // remove o ultimo item do arrey

console.log(colors) 
console.log(removedColor)
console.log(lastColor)

removedColor; // "red" 
//consigo quardar o item removido em uma variavel*

const spliceTeste = [1 , 2 , 3 , 4 , 5];

spliceTeste.splice(3 , 2 );

console.log(spliceTeste) 

let arr = [1, 2, 3, 4, 5];
let num = 3

function findElement(arr, num) {
    // Write code here
    let varificador = arr.includes(num);
    let index = arr.indexOf(num);

    if (varificador == true ) {
       return (index);
    }
    else return index;


}

console.log(findElement(arr, 5));

let numbers = [40, 10, 30, 20, 50, 30, 10];

let hasHundred;


numbers.sort();
numbers.reverse();

let a = numbers.indexOf(30);
let b = numbers.lastIndexOf(10);

let c = numbers.includes(100);
    


console.log(numbers)
console.log(a)
console.log(b)  
console.log(c)


 
 
//(1)
function saudacoes ( nome ) {
    return (`Olá, ${nome}! Bem-vindo(a)!`);
}

console.log(saudacoes("André"))

//(2)
function media (n1 , n2, n3) {
    let media = (n1 + n2 + n3) / 3;

    return media >= 7 ? media + " Aprovado" : media + " Reprovado";

}

console.log(media(7, 8, 9))

//(3 )
let dobro;

dobro = (num) => num * 2;
console.log(dobro(15))

//(4)

//Metodos String

let nome = "  andre carreira  "
let semEnome = nome.trim(); // "andre carreira"
console.log(semEnome.length) // 
console.log(semEnome.toUpperCase()) // "  ANDRE CARREIRA  " 

//(5)   

let numeros = [2, 5, 8, 10, 3];

let maior = numeros.filter(num => num > 5); // [8, 10]
let filtro = maior.map(num => num * 2); // [16, 20]
let soma = filtro.reduce((acc, num) => acc + num, 0); // 36
console.log(soma) // 36

// podemos encadear os metodos

const resultado = numeros
    .filter(num => num > 5) // [8, 10]
    .map(num => num * 2) // [16, 20]
    .reduce((acc, num) => acc + num, 0); // 36

console.log(resultado) // 36

//(6)

let alunos = [
  { nome: "João", nota: 8 },
  { nome: "Maria", nota: 6 },
  { nome: "Pedro", nota: 9 }
];

let alunosAprovados = alunos
    .filter(alunos => alunos.nota >= 7) // [{ nome: "João", nota: 8 }, { nome: "Pedro", nota: 9 }]
    .map(alunos => alunos.nome); // ["João", "Pedro"]

    console.log(alunosAprovados) // ["João", "Pedro"]

// (7) 

function contador (num) {
    for (let i = 0; i <= num ; i++) {
        console.log(i);
    }
}

contador(6);

//(8) 

function leitor (num) {

    if (num % 2 === 0) {
        console.log( num + " é Par");
    }
    else console.log(num + " é Impar");
}

leitor(3);

// (9) 

function contaPalavras (frase) {
    let palavras = frase
    .trim()  // Remove espaços extras
    .split(/\s+/); //  divide a frase em palavras

    return palavras.length; // Retorna o número de palavras
}

console.log(contaPalavras("Olá, como vai você?")) // 4

// (10) 

let produtos = [
  { nome: "Produto A", preco: 150, categoria: "Eletrônicos" },
  { nome: "Produto B", preco: 80, categoria: "Roupas" }
];


function cadastrarProduto(nome, preco, categoria) {
  produtos.push({ nome, preco, categoria });
}

function calcularTotalProdutosCaros() {
  let produtosCaros = produtos.filter(produto => produto.preco > 100);

  return produtosCaros.reduce((acc, produto) => acc + produto.preco, 0);
}

cadastrarProduto("Produto C", 200, "Eletrodomésticos");

console.log(calcularTotalProdutosCaros()); 
// 150 + 200 = 350 

function processArray(arr) {
  // Write code here
    arr.pop()
    arr.push(10);
    
    if (arr.includes(5)) {
        let pos = arr.indexOf(5)
        arr.splice(pos , 1, 50);
    }

    arr.reverse();

return arr;
}


console.log(processArray([9, 6, 3, 12])); */

const nomes = ['João', 'Maria', 'Pedro', 'Ana', 'André', 'Carlos', 'Mariana', 'Julia', 'Fernanda', 'Gabriel', 'Luana'];

nomes.forEach(function (nomes) {
    console.log(`sejam bem vindos aluno(a) ${nomes}`)
})