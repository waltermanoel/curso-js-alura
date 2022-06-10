import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import cordel from "./cordelRoutes.js";
import editoras from "./editorasRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({titulo: "Curso de Node"})
    });

    app.use(
        express.json(),
        livros,
        autores,
        cordel,
        editoras
    )
};

export default routes;
