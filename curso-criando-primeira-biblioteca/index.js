const chalk = require("chalk");
const fs = require("fs");

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;

    const arrayRes = [];
    let temp;

    while((temp = regex.exec(texto)) !== null) {
        arrayRes.push({ [temp[1]]: temp[2] });
    };

    return arrayRes;
};

function tratarErro(erro) {
    throw new Error(chalk.red(erro.code, "não há arquivo no caminho"));
};

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = "UTF-8";
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(extraiLinks(texto));
    } catch(erro) {
        tratarErro(erro);
    };
};

pegaArquivo("./arquivos/texto1.md");
