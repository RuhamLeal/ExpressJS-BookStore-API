import autores from "../models/Autor.js";

class AutorController {
  static showAuthor = (req, res) => {
    autores.find((err, autores) => res.status(200).json(autores));
  }

  static showAuthorByID = (req, res) => {
    const { id } = req.params;

    autores.findById(id, (err, autores) => {
      if(err) {
        res.status(400).send({ message: `${err.message} - ID do autor nao localizada ou inexistente` });
      } else res.status(200).send(autores);
    });
  }

  static registerAuthor = (req, res) => {
    const autor = new autores(req.body);

    autor.save((err) => {
      if(err) {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar autor.` });
      } else res.status(201).send(autor.toJSON());
    });
  }

  static updateAuthor = (req, res) => {
    const { id } = req.params;

    autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if(err) {
        res.status(500).send({ message: `${err.message} - Falha ao atualizar autor.`  });
      } else {
        res.status(200).send({ message: 'Autor atualizado com sucesso' });
      }
    });
  }

  static deleteAuthor = (req, res) => {
    const { id } = req.params;

    autores.findByIdAndDelete(id, (err) => {
      if(err) res.status(500).send({ message: err.message });
      else res.status(200).send({ message: 'Autor removido com sucesso' });
    });
  }
}

export default AutorController;
