import editoras from "../models/Editora.js";

class EditoraController {

    static listarEditoras = (req, res) => {
        editoras.find((err, editoras) => {
            res.status(200).json(editoras);
        })
    };

    static listarEditoraPorId = (req, res) => {
        const id = req.params.id;

        editoras.findById(id, (err, editoras) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id não localizado`});
            } else {
                res.status(200).send(editoras.toJSON());
            };
        });
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

    static atualizarEditora = (req, res) => {
        const id = req.params.id;

        editoras.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err) {
                res.status(500).send({message: err.message})
            } else {
                res.status(200).send({messagem: "Editora atualizada com sucesso."})
            };
        });

    };

    static excluirEditora = (req, res) => {
        const id = req.params.id;

        editoras.findByIdAndDelete(id, (err) => {
            if(err) {
                res.status(500).send({message: err.message});
            } else {
                res.status(200).send({mensagem: "Editora excluida com sucesso"});
            };
        });
    };

}

export default EditoraController;
