const chalk = require("chalk");
const fs = require("fs");

function tratarErro(erro) {
    throw new Error(chalk.red(erro.code, "não há arquivo no caminho"));
};

function pegaArquivo(caminhoDoArquivo) {
    const encoding = "UTF-8";
    fs.promises.readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch((erro) => tratarErro(erro));
};

/*function pegaArquivo(caminhoDoArquivo) {
    const encoding = "UTF-8";
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            tratarErro(erro);
        } else {
        console.log(chalk.green(texto));
        };
    });
};*/

pegaArquivo("./arquivos/texto1.md");
