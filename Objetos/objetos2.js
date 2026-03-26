const pessoa = {
    nome: "André",
    idade: "21",
    cargo: "Estagiario",
    saudacao: function() {
        return console.log(`Ola eu sou o André` )
    }
}

//console.log(pessoa)

//pessoa.saudacao();


const calculos = {
    soma: function (numero1, numero2) {
        return numero1 + numero2;
    },
    subtrair: function (numero1, numero2){
        return numero1 - numero2;
    }
}

console.log(calculos.soma(1, 5))
console.log(calculos.subtrair(1, 5))

let a = calculos.soma(1, 5);
let b = calculos.subtrair(1, 5)

console.log(a)

console.log(b)