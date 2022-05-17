import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nasc, role="admin", ativo=true) {
        super(nome, email, nasc, role, ativo);
    };
};

const novoAdmin = new Admin("Walter", "walter@gmail.com", "09/09/2000");

console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
