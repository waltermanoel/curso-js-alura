const chalk = require("chalk");
const fs = require("fs");

function tratarErro(erro) {
    throw new Error(chalk.red(erro.code, "não há arquivo no caminho"));
};

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = "UTF-8";
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(chalk.green(texto));
    } catch(erro) {
        tratarErro(erro);
    };
};

/*function pegaArquivo(caminhoDoArquivo) {
    const encoding = "UTF-8";
    fs.promises.readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch((erro) => tratarErro(erro));
};*/

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

/*pegaArquivo("./arquivos/texto.md");

function promessa(bool) {
    const x = bool;
    return new Promise((resolve, reject) => {
      if (!x) {
        reject(new Error("falha na promessa"));
      }
      resolve("sucesso na promessa");
    });
   }
   
   function exibeResposta(textoResult) {
    console.log(textoResult);
   }
   
   promessa(true)
    .then((texto) => exibeResposta(texto))
   // sucesso na promessa*/
