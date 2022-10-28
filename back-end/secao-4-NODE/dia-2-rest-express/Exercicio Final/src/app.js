// src/app.js

const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

app.use(express.json());

const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

// Exercicio 5
app.get('/movies/:id', async (req, res) => {
  const data = await readFile();
  let movie;
  try {
    movie = data.find(({id}) => id === Number(req.params.id));
    res.status(200).json(movie);
  } catch (error) {
    console.log(error);
  }
});

// Exercicio 6
app.get('/movies', async (req, res) => {
  const data = await readFile();
  try {
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});

// Exercicio 7
app.post('/movies', async (req, res) => {
  const data = await readFile();
  const newMovie = req.body;
  try {
    await fs.writeFile(moviesPath, JSON.stringify([...data, newMovie]));
    res.status(200).json(newMovie);
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;