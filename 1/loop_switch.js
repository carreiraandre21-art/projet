//SWITCH ( SAO CASOS ) PARA DIMINUIR O USO DE IF/ELSE... SIMPLIFICAR ENCADEAMENTO 
//FICA MAIS ORGANIZADO 

const promocao = 0;

     //dentro do () vamos colocar oque queremos ter de caso 
switch(promocao) {
    case 10: // caso seja 10, execula isso. usar : dois ponto
        console.log(`tenis`)
        break; //colocar break para parar na casa se for o "caso"
    case 20:
        console.log(`cuecas`) 
        break;
    case 30:
        console.log(`camisetas`)
        break;
        case 40:
            console.log(`relogio`)
            break; 
                          default: //o defalt é se caso não estiver em cima seu numero ou casa, vai executar o defalt 
                               console.log(`produto nao existe!`)
}

//da pra usarmos descontos nesse casos pois adicionamos a variavel LET DESCONTO; e dentro das casa de cada um adiconar os descontos de cada produto 
// EXEMPLO

console.log(`BEM VINDO A BLACK DA CARREIRA WEAR`)

const black = 10;
let descontoExibicao, valor, ValorDesconto, valorDoDesconto, valorFinal; // ou let desconto = 0; crie a variavel sem valor dps add 
let valorOriginal;

switch (black) {

    case 10:
    valorOriginal = 79.90;
    valor = 79.90;
    descontoExibicao = 10;
    ValorDesconto = (valor * descontoExibicao) / 100;
    valorFinal =  valor - ValorDesconto;
        console.log (`Camisetas `)
        break;

    case 20:
    valorOriginal = 99.90;
    valor = 99.90;
    descontoExibicao = 10;
    descontoEmDecimal = descontoExibicao / 100;
    valorDoDesconto = valor * descontoEmDecimal;
    valorFinal =  valor - valorDoDesconto;
        console.log(`calcas `)
        break;

    case 30:
    descontoExibicao = 30
        console.log(`brinquedos`)

    default:
        console.log(`Nao temos esse setor, adicone algum setor da black`)
}

        console.log(`o valor do desconto nesse setor é ${descontoExibicao}%`);

        console.log(`de ${valorOriginal.toFixed(2)} por ${valorFinal.toFixed(2)}`);

        console.log (ValorDesconto);
