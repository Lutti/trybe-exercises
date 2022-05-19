// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

function sum(...numeros){
    return numeros.reduce((acc, cur) => acc + cur, 0);
}