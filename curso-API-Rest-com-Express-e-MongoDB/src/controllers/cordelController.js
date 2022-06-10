const rootStyles = "D:/Acesso rápido/Documentos/Estudos/curso-js-alura/curso-API-Rest-com-Express-e-MongoDB/src/files/styles";
const rootHtml = "D:/Acesso rápido/Documentos/Estudos/curso-js-alura/curso-API-Rest-com-Express-e-MongoDB/src/files/html"


class cordelController {
    static mostrarPagina = (req, res) => {
        res.status(200).sendFile("index.html", {root: rootHtml});
    };

    static enviarEstilo = (req, res) => {
        res.status(200).sendFile("style.css", {root: rootStyles});
    };

}

export default cordelController;
