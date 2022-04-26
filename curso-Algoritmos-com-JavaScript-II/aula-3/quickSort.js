const listaLivros = require("./array");
const trocaLugar = require("./encontraMenores");

function quickSort(array, esquerda, direita) {

    if (array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);
        if (esquerda < indiceAtual - 1) {
            quickSort(array, esquerda, indiceAtual - 1);
        }

        if (indiceAtual < direita) {
            quickSort(array, indiceAtual, direita);
        };
    };

    return array;
};

function particiona(array, esquerda, direita) {
    console.log("array", array);
    console.log("esquerda, direita", esquerda, direita);
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    let altualEsquerda = esquerda;
    let altualDireita = direita;

    while (altualEsquerda <= altualDireita) {
        while (array[altualEsquerda].preco < pivo.preco) {
            altualEsquerda++;
        };

        while (array[altualDireita].preco > pivo.preco) {
            altualDireita--;
        };

        if (altualEsquerda <= altualDireita) {
            trocaLugar(array, altualEsquerda, altualDireita);
            altualEsquerda++;
            altualDireita--;
        };
    };

    return altualEsquerda;
};
 
console.log(quickSort(listaLivros, 0, listaLivros.length - 1));
