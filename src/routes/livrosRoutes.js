import express from 'express';
import LivroController from '../controllers/livrosController.js';

const router = express.Router();

router
  .get('/livros', LivroController.showBooks)
  .post('/livros', LivroController.registerBook);


export default router;
