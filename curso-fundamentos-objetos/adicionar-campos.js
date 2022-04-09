const cliente = {
    nome: "Walter",
    idade: 17,
    cpf: "556496466",
    email: "walter@gmail.com"
};

console.log(cliente.fone);

cliente.fone = "9356445";

console.log(cliente.fone);

cliente["fone"] = "9356446";

console.log(cliente.fone);
