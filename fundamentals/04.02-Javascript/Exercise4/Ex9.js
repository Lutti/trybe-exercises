// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [];

for(let i = 1; i < 26;i++)
{
    numbers2.push(i);
}

//console.log(numbers2);

for(let n of numbers2)
{
    console.log(n / 2);
}
