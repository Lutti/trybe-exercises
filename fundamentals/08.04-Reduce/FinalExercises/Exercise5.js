const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
function containsA() {
    const numbersOfA = names.reduce((acc, cur) => {
        return acc + cur.toUpperCase().split('').reduce((numCharA, char) => char === 'A' ? numCharA + 1 : numCharA, 0);
    }, 0);

    console.log(numbersOfA);
}