const fetch = require("node-fetch");

function manejaErros(erro) {
    throw new Error(erro.message);
};

async function checaStatus(arrayDeURLs) {
    //promises async await
    try {
        const arrayDeStatus = await Promise
            .all(arrayDeURLs
                .map(async URL => {
                    const res = await fetch(URL);
                    return res.status;
                }
                )
            );
        return arrayDeStatus;
    } catch (erro) {
        manejaErros(erro);
    };
};

function geraArrayDeURLs(arrayDeLinks) {
    return arrayDeLinks
        .map(objetoLink => Object
            .values(objetoLink).join()
        );
};

async function validaURLs(arrayDeLinks) {
    const liks = geraArrayDeURLs(arrayDeLinks);
    const statusLinks = await checaStatus(liks);
    const arrayObjetosLinks = arrayDeLinks
        .map((objetoLink, indice) => (
            { ...objetoLink, status: statusLinks[indice]}
            )
            );
    return arrayObjetosLinks;
};

module.exports = validaURLs;
