// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let numeroMaximo = 50;

for (let numStart = numeroMaximo; numStart >= 1; numStart--)
{
    let primo = true;
    for(let range = numStart - 1; range >= 2;range--)
    {
        if(numStart % range === 0)
        {
            primo = false;
        }
    }

    if (primo)
    {
        console.log("Esse numero é primo: " + numStart);
        break;
    }
}