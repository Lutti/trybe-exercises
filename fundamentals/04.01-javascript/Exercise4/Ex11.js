// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

const salario = 3000;
let salarioMenosInss = 0;
let salarioMenosInssEIR = 0 ;

if (salario <= 1556.94)
{
    salarioMenosInss = salario - (salario * 0.08);
}
else if (salario <= 2594.92)
{
    salarioMenosInss = salario - (salario * 0.09);
}
else if (salario <= 5189.82)
{
    salarioMenosInss = salario - (salario * 0.11);
}
else
{
    salarioMenosInss = salario - 570.88;
}

// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

if (salarioMenosInss <= 1903.98)
{
    salarioMenosInssEIR = salarioMenosInss;
}
else if (salarioMenosInss <= 2826.65)
{
    salarioMenosInssEIR = salarioMenosInss - ((salarioMenosInss * 0.075) - 142.80);
}
else if (salarioMenosInss <= 3751.05)
{
    salarioMenosInssEIR = salarioMenosInss - ((salarioMenosInss * 0.15) - 354.80);
}
else if (salarioMenosInss <= 4664.68)
{
    salarioMenosInssEIR = salarioMenosInss - ((salarioMenosInss * 0.225) - 636.13);
}
else
{
    salarioMenosInssEIR = salarioMenosInss - ((salarioMenosInss * 0.275) - 869.36);
}

console.log(salarioMenosInssEIR);