//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for

function isPalindromo(param1)
{
    let aux = "";
    for (let i = param1.length - 1; i >= 0 ; i--)
    {
        aux = aux + param1[i];
    }

    // console.log(aux, param1);

    if (aux === param1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let truOuFalse = isPalindromo('hannah');
console.log(truOuFalse);