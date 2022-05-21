import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nasc, role="admin", ativo=true) {
        super(nome, email, nasc, role, ativo);
    };

    exibirInfos() {
        return `${this.nome}, ${this.role}, ${this.ativo}`
    };

    criarCurso(nome, vagas) {
        return `curso de ${nome} criado com ${vagas} vagas`;
    };
};
