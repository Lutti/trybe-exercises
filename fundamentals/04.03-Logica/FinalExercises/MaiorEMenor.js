//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let resultadoMaior = array[0];
let resultadoMenor = array[0];

for (let word of array)
{
    if(word.length > resultadoMaior.length)
    {
        resultadoMaior = word;
    }
    if(word.length < resultadoMenor.length)
    {
        resultadoMenor = word;
    }
}

console.log("Maior: " + resultadoMaior);
console.log("Menor: " + resultadoMenor);