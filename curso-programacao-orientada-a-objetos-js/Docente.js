import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nasc, role="docente", ativo=true) {
        super(nome, email, nasc, role, ativo);
    };

    aprovaEstudante(estudante, curso) {
        return `estudante ${estudante} passou no curso de ${curso}.`;
    };
};
