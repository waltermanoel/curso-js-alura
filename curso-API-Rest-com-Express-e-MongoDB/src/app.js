import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
});

const app = express();

app.use(express.json());

/*const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobiit"},
    {id: 3, "titulo": "Árvore do dinheiro"}
];*/

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node");
});

app.get("/livros", (req, res) => {
    livros.find((err, livros) => {
    res.status(200).json(livros);
    });

    
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    const livro = livros[index];
    res.status(200).json(livro);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send(`Livro ${req.body.titulo} foi criado com sucesso`)
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(201).send(`livro com id: ${req.params.id} foi atualizado com sucesso`);
});

app.delete("/livros/:id", (req, res) => {
    const {id} = req.params;
    const index = buscaLivro(id);
    livros.splice(index, 1)
    res.status(201).send(`livro com id: ${req.params.id} foi deletado com sucesso`);
});

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
};

export default app; 
