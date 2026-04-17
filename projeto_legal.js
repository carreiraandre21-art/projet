const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;

console.log('\n🎯 JOGO: Adivinhe o número (1-100)');

console.log('=====================================');

function perguntar() {

  rl.question('Digite um número: ', (input) => {

    const chute = parseInt(input);

    if (isNaN(chute)) { console.log('❌ Digite um número válido!');
       return perguntar(); }
    tentativas++;
    if (chute === numeroSecreto) {
      console.log(`\n🎉 PARABÉNS! Você acertou em ${tentativas} tentativa(s)!\n`);
      rl.close();
    }
    else if (chute < numeroSecreto) {
      console.log('📈 O número é MAIOR!'); perguntar();
    }
    else {
      console.log('📉 O número é MENOR!'); perguntar();
    }

  });
}

perguntar();