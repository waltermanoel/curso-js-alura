import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nasc, role="admin", ativo=true) {
        super(nome, email, nasc, role, ativo);
    };

    nomeAdmin() {
        return `${this.nome}`
    };

    criarCurso(nome, vagas) {
        return `curso de ${nome} criado com ${vagas} vagas`;
    };
};
