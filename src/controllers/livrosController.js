import livros from "../models/Livro.js";

class LivroController {
  static showBooks = (req, res) => {
    livros.find((err, livros) => {
      res.status(200).json(livros);
    });
  }

  static showBookByID = (req, res) => {
    const id = req.params.id;

    livros.findById(id, (err, livros) => {
      if(err) {
        res.status(400).send({ message: `${err.message} - ID do livro nao localizada ou inexistente` });
      } else {
        res.status(200).send(livros);
      };
    });
  }

  static registerBook = (req, res) => {
    const livro = new livros(req.body);

    livro.save((err) => {
      if(err) {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar livro.` });
      } else {
        res.status(201).send(livro.toJSON());
      };
    });
  }

  static updateBook = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if(err) {
        res.status(500).send({ message: `${err.message} - Falha ao atualizar livro.`  });
      } else {
        res.status(200).send({ message: 'Livro atualizado com sucesso' });
      }
    });
  }

  static deleteBook = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndDelete(id, (err) => {
      if(err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send({ message: 'Livro removido com sucesso' });
      };
    });
  }
}

export default LivroController;
