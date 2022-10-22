import livros from "../models/Livro.js";

class LivroController {
  static showBooks = (req, res) => {
    livros.find((err, livros) => {
      res.status(200).json(livros);
    });
  };
  static registerBook = (req, res) => {
    const livro = new livros(req.body);
    livro.save((err) => {
      if(err) {
        res.status(500).send({ message: `${err.message} - falha ao cadastras livro.` });
      } else {
        res.status(201).send(livro.toJSON());
      };
    });
  };
};



export default LivroController;
