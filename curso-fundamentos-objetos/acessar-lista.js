const cliente = {
    nome: "Walter",
    idade: 17,
    cpf: "556496466",
    email: "walter@gmail.com"
};

const chaves = ["nome", "idade", "cpf", "email"];

//console.log(cliente[chaves[0]]);

chaves.forEach(elem => console.log(cliente[elem]));

console.log(cliente["contas"]);
