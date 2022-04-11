//Crie uma função que receba um array de inteiros e retorne o índice do maior valor
function retMenor(arr)
{
    let iMaior = 0;
    for(let i in arr)
    {
        if(arr[i] < arr[iMaior])
        {
            iMaior = i;
        }
    }
    return iMaior;
}

let sample = [2, 4, 6, 7, 10, 0, -3];

console.log(retMenor(sample));
