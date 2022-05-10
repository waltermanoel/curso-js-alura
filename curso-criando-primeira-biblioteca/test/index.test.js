const pegaArquivo = require("../index");

const arrayResult = [
    {FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList"}
];

describe("pegaArquivo::", () => {
    it("deve ser uma função", () => {
        expect(typeof pegaArquivo).toBe("function");
    });
    it("deve retorna array com resultado", async () => {
        const resultado = await pegaArquivo("D:/Acesso rápido/Documentos/Estudos/curso-js-alura/curso-criando-primeira-biblioteca/test/arquivos/texto1.md");
        expect(resultado).toEqual(arrayResult);
    });
});
