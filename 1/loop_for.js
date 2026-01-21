// REPETIR NOSSO CODIGO 

// FOR (PARA), FAÇA QUANTAS VEZES PRECISAR 
// FOR é usado quando você sabe já quantas vezes vai repetir o bloco de codigo 

//for ( let i = 0; i <= 100; i++) {
//    console.log(`passou aqui ${i}`)
//}
/*
let valor = 10;

for (let i = 1; i <=10; i++) {
    valor = valor + 5;
    //console.log (`acrecentamos 5 ao resultado por ${i} vezes e:${valor} `)
}

console.log (` é assim que fica o loop com nossa variavel let = ${valor}`)
*/

let idade = 0;
const AnoAtual = 2025;
const AnoNasc = 2005;

for ( let i = AnoNasc; i <= 2050; i++ ) {

    idade = idade + 1;

    if ( i === AnoAtual ) {
        console.log (`essa é sua idade nos dias de hoje ${idade}`);
    } else {
        console.log (`processando ${i}`);
    }

}

console.log(`e aqui conseguimos ver apenas o resultado final, em 2050 vou ter ${idade} Anos`)





