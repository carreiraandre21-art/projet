

// this sem parametros 

const calculos = {

    numero1: 10,
    numero2: 20,

    soma: function () {
        return this.numero1 + this.numero2;
    },
    subtrair: function () {
        return this.numero1 - this.numero2;
    }
}

const resultadoSoma = calculos.soma();
console.log(resultadoSoma);

const resultadoSUB = calculos.subtrair();
console.log(resultadoSUB)