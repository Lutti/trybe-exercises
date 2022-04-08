// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab".
// Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente
let palavraBase = "banana";
let palavraInvert = "";

for (let i = palavraBase.length - 1; i >= 0 ; i--)
{
    palavraInvert = palavraInvert + palavraBase[i];
}

console.log(palavraInvert);