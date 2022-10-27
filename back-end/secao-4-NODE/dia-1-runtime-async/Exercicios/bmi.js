const CalcIMC = (peso, altura) => peso / Math.pow(altura, 2);

console.log(CalcIMC(90,1.75));

module.exports = { CalcIMC };
