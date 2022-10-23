import express from 'express';
import LivroController from '../controllers/livrosController.js';

const router = express.Router();

router
  .get('/livros', LivroController.showBooks)
  .get('/livros/busca', LivroController.showBooksByPublisher)
  .get('/livros/:id', LivroController.showBookByID)
  .post('/livros', LivroController.registerBook)
  .put('/livros/:id', LivroController.updateBook)
  .delete('/livros/:id', LivroController.deleteBook);


export default router;
