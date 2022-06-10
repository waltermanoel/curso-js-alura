import editoras from "../models/Editora.js";

class EditoraController {

    static listarEditoras = (req, res) => {
        editoras.find((err, editoras) => {
            res.status(200).json(editoras);
        })
    };

    static cadastrarEditora = (req, res) => {
        let editora = new editoras(req.body);

        editora.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar a editora`})
            } else {
                res.status(201).send(editora.toJSON());
            };
        })
    };

}

export default EditoraController;