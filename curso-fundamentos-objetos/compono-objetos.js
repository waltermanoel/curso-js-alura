const cliente = {
    nome: "Walter",
    idade: 17,
    cpf: "556496466",
    email: "walter@gmail.com"
};

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/04/1990"
};

console.log(cliente);

cliente.dependentes.nome = "Sara Araújo de Melo";

console.log(cliente);
