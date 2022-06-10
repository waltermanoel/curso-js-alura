import express from "express";
import cordelController from "../controllers/cordelController.js";

const router = express.Router();

router
    .get("/cordel", cordelController.mostrarPagina)
    .get("/cordel/style.css", cordelController.enviarEstilo)

export default router;
