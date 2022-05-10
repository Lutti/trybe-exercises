const sum = require('./sum.js');

test('verifica se a soma de 4 com 5 é 9',() => {
    expect(sum(4,5)).toBe(9);
});
test('verifica se a soma de 0 com 0 é 0',() => {
    expect(sum(0,0)).toBe(0);
});
test(`dispara um erro ao somar 4 com "5"`,() => {
    expect(() => sum(4,"5")).toThrow('parameters must be numbers');
});