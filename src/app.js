import express from 'express';

const app = express();

const livros = [
  {id: 1, "titulo": "O senhor dos Aneis"},
  {id: 2, "titulo": "O hobbit"},
];

app.get('/', (req, res) => {
  res.status(200).send('Aprendendo Node');
});

app.get('/livros', (req, res) => {
  res.status(200).json(livros);
});

export default app;
