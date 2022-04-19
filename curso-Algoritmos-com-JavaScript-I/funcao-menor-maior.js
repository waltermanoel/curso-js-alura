const livros = require("./listaLivros");

function baratoCaro(livros) {
    let maisBarato = 0;
    let maisCaro = 0;

    for (let atual = 0; atual < livros.length; atual++) {
        if (livros[atual].preco < livros[maisBarato].preco) {
            maisBarato = atual;
        };

        if (livros[atual].preco > livros[maisCaro].preco) {
            maisCaro = atual;
        };
    };

    return {maisBarato: maisBarato, maisCaro: maisCaro};
};

const livrosCaroBarato = baratoCaro(livros);
const livroMaisCaro = livrosCaroBarato.maisCaro;
const livroMaisBarato = livrosCaroBarato.maisBarato;

console.log(`O livro mais caro é o de ${livros[livroMaisCaro].titulo} que custa R$ ${livros[livroMaisCaro].preco},00`);
console.log(`O livro mais barato é o de ${livros[livroMaisBarato].titulo} que custa R$ ${livros[livroMaisBarato].preco},00`);
