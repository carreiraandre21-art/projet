
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

isValid ("not_user", "pass");*/

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