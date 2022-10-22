import express from 'express';

const app = express();

app.use(express.json());

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

app.get('/livros/:id', (req, res) => {
  const index = findBooks(req.params.id);
  res.json(livros[index]);
});

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livro cadastrado com sucesso');
});

app.put('/livros/:id', (req, res) => {
  const index = findBooks(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
});

function findBooks(id) {
  return livros.findIndex((book) => book.id == id);
};

export default app;
