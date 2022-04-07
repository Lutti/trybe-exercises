let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// Vamos ter que percorrer todo o vetor, logo:
for (let k = 1; k < numbers.length; k++) {
    // Dentro de cada iteração
    // percorremos novamente o vetor
    // em busca dos pares
    for (let j = numbers.length - k -1; j >= 0; j--) {
        // Comparamos
        if (numbers[j] < numbers[j + 1]) {
            // swap (trocamos)
            aux          = numbers[j];
            numbers[j]     = numbers[j + 1];
            numbers[j + 1] = aux;
        }
        console.log(numbers);
    }
}