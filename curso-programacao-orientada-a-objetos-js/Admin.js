import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nasc, role="admin", ativo=true) {
        super(nome, email, nasc, role, ativo);
    };

    criarCurso(nome, vagas) {
        return `curso de ${nome} criado com ${vagas} vagas`;
    };
};

const novoAdmin = new Admin("Walter", "walter@gmail.com", "09/09/2000");

console.log(novoAdmin.criarCurso("JS", 30));
