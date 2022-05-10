#!/usr/bin/env node
const chalk = require("chalk");
const pegaArquivo = require("./index");
const validaURLs = require("./http-validacao");

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
    const res = await pegaArquivo(caminhoDoArquivo[2]);
    if (caminho[3] === "validar") {
        console.log(chalk.yellow("Links validados"), await validaURLs(res));
    } else {
        console.log(chalk.yellow("Lista de links"), res);
    };
};

processaTexto(caminho);
