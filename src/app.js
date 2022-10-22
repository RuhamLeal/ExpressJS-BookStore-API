import express from 'express';
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js"

db.on("error", console.log.bind(console, 'Erro de conexao'));
db.once("open", () => {
  console.log('Conexao com o banco feita com sucesso');
});

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Aprendendo Node');
});

app.get('/livros', (req, res) => {
  livros.find((err, livros) => {
    res.status(200).json(livros);
  });
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
  const { params, body } = req;
  const index = findBooks(params.id);
  livros[index].titulo = body.titulo;
  res.json(livros);
});

app.delete('/livros/:id', (req, res) => {
  const { id } = req.params;
  const index = findBooks(id);
  livros.splice(index, 1);
  res.json(`Libro ${id} removido com sucesso`);
});

function findBooks(id) {
  return livros.findIndex((book) => book.id == id);
};

export default app;
