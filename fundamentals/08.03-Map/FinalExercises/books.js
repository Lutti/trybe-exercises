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

// ------------======== 1 ========------------------

function formatedBookNames() {
    const bookOnStrings = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`.toUpperCase());   
    console.log(bookOnStrings);
}

// ------------======== 2 ========------------------
function nameAndAge() {
    const authorsAndAges = books.map((book) => {
        return {
            age: book.releaseYear - book.author.birthYear,
            author: book.author.name,
        }});

    authorsAndAges.sort((author1, author2) => author1.age - author2.age);

    console.log(authorsAndAges);
}

// ------------======== 3 ========------------------
function fantasyOrScienceFiction() {
// Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
    const fiction = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');

    console.log(fiction);
}
// ------------======== 4 ========------------------
function oldBooksOrdered() {
// Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho
    const maior60 = books.filter((book) => 2022 - book.releaseYear > 60).sort((book1, book2) => book1.releaseYear - book2.releaseYear);

    console.log(maior60);
}
// ------------======== 5 ========------------------
function fantasyOrScienceFictionAuthors() {
    const fiction = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
    .map((book) => book.author.name)
    .sort();

    console.log(fiction);
}
// ------------======== 6 ========------------------
// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
function oldBooks() {
    const maior60 = books.filter((book) => 2022 - book.releaseYear > 60).map((book) => book.name);

    console.log(maior60);
}
// ------------======== 7 ========------------------
// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
function authorWith3DotsOnName() {
    const author3Dots = books.find((book) => book.author.name.split('.').length > 3).name;

    console.log(author3Dots);
}