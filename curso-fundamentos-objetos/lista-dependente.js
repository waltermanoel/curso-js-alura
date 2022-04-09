const cliente = {
    nome: "Walter",
    idade: 17,
    cpf: "556496466",
    email: "walter@gmail.com",
    dependentes: [{
        nome: "Sara Melo",
        parentesco: "filha",
        dataNasc: "20/04/1990"
    }]
};

cliente.dependentes.push({
    nome:"Raiza Silva",
    parentesco: "irmã",
    dataNasc: "20/04/1999"
})

console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(depen => depen.dataNasc === "20/04/1990");

console.log(filhaMaisNova[0].nome);
