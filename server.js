const http = require('http');
const port = 3000;

const rotas = {
  '/': 'Curso de Node',
  '/livros': 'Entrei na pagina de livros',
  '/autores': 'Entrei na pagina de autores',
  '/dados': JSON.stringify({
    'json': 'test',
  }),
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(rotas[req.url]);
});

server.listen(port, () => {
  console.log(`Servidor escutando em htpp://localhost:${port}`);
});
