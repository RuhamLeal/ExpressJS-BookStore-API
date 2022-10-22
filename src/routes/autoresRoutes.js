import express from 'express';
import AutorController from '../controllers/autoresController.js';

const router = express.Router();

router
  .get('/autores', AutorController.showAuthor)
  .get('/autores/:id', AutorController.showAuthorByID)
  .post('/autores', AutorController.registerAuthor)
  .put('/autores/:id', AutorController.updateAuthor)
  .delete('/autores/:id', AutorController.deleteAuthor);


export default router;