//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres

function nomeMaior(arr)
{
    let indiceMaior = 0;

    for (let i in arr)
    {
        if(arr[i].length > arr[indiceMaior].length)
        {
            indiceMaior = i;
        }
    }

    return arr[indiceMaior];
}

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(nomeMaior(nomes));