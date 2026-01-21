// acertar na roleta 

function gerador () {
    return Math.random();

}


let numeroGerado = gerador() * 100;



let escolhaNumero = 49 // escolha um nmr


while (numeroGerado != escolhaNumero ) {

if (numeroGerado == escolhaNumero) {
    console.log("Você acertou, ganhou o premio ");
} else {
    console.log("Você perdeu, tente novamente ");
} 
}

console.log(numeroGerado.toFixed(0));
