// Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , 
// imprima na tela um quadrado feito de asteriscos de lado de tamanho n 

let num = 5;
let line = "";

for(let letter = 0; letter < num; letter++)
{
    line = line + "*";
}

for(let i = 0; i < num; i++)
{
    console.log(line);
}