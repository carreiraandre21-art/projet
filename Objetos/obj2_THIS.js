

const numero = {
    n1: 10,
    n2: 56,

    soma: function () {
        return this.n1 + this.n2
    },

    subtracao: function() {
        return this.n1 - this.n2
    },
}


let resultado_soma = numero.soma()

let resultado_subtracao = numero.subtracao()


console.log(resultado_soma)

console.log(resultado_subtracao)


resultado_subtracao > resultado_soma ? console.log(resultado_subtracao - resultado_soma) : console.log(resultado_soma + resultado_subtracao)

