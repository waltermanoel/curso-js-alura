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



/*function promessa(bool) {
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