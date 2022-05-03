const chalk = require("chalk");

console.log("Vamos começar!");

const paragrafo = "Texto retornado por uma função";

function texto(string) {
    return string;
};

console.log(chalk.blue(texto(paragrafo)));
