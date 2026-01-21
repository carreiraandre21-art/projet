let a = 5
let b = 10


//funcoes anonimas




let soma = function(n1 , n2){
    return n1 + n2;
}
console.log(soma (2, 3));  // Expected output: 5



//auto executaveis

let mult = (function(){
    console.log( 4 * 5 );
})();


// ou add parametros

let multParametro = (function(n1, n2){
    return n1 * n2;
})(a, b); // chamando a funcao e passando os parametros

console.log( multParametro +" com parametro ");  // Expected output: 42


let semParametro = (function(){
    console.log(5 * 2);
    return 5 * 2;
})(); // chamando a funcao sem parametros auto executavel