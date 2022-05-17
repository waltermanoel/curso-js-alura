import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nasc, role="docente", ativo=true) {
        super(nome, email, nasc, role, ativo);
    };

    aprovaEstudante(estudante, curso) {
        return `estudante ${estudante} passou no curso de ${curso}.`;
    };
};

const novoDocente = new Docente("Natália", "natalia@gmail.com", "07/03/1999");

console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante("Sara", "PHP"));
