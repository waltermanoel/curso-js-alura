import express from "express";
import EditorasController from "../controllers/editorasController.js";

const routes = express.Router();

routes
    .get("/editoras", EditorasController.listarEditoras)
    .post("/editoras", EditorasController.cadastrarEditora)

export default routes;
