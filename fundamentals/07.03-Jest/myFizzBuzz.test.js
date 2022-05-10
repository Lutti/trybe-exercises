const myFizzBuzz = require('./myFizzBuzz.js');

// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
test('número divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
});
test('número divisível por 3', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
});
test('número divisível por 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
});
test('não é divisível por 3 ou 5', () => {
    expect(myFizzBuzz(2)).toBe(2);
});
test('não é um número', () => {
    expect(myFizzBuzz('texto')).toBe(false);
});