//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let num = numbers[0];

for(let n of numbers)
{
    if(n < num)
    {
        num = n;
    }
}

console.log(num);