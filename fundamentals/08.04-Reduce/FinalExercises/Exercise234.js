const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

// Crie uma string com os nomes de todas as pessoas autoras.
function reduceNames() {
    const autores = books.reduce((acc, cur) => {
        return acc === '' ? cur.author.name : `${acc}, ${cur.author.name}`;
    },'');
    console.log(autores);
}
// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
function averageAge() {
    const ages = books.reduce((acc, cur) => {
        return acc + (cur.releaseYear - cur.author.birthYear)
    }, 0) / books.length;

    console.log(ages);
}
// Encontre o livro com o maior nome.
function longestNamedBook() {
    const longBook = books.reduce((acc, cur) => acc.name.length > cur.name.length ? acc : cur , books[0]).name;
    console.log(longBook);
}
longestNamedBook();