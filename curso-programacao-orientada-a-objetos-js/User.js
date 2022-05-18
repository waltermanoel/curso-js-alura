export default class User {
    #nome
    #email
    #nasc
    #role
    #ativo
    constructor(nome, email, nasc, role, ativo=true) {
        this.#nome = nome;
        this.#email = email;
        this.#nasc = nasc;
        this.#role = role || "estudante";
        this.#ativo = ativo;
    };

    exibirInfos() {
        return `${this.#nome}, ${this.#email}`;
    };
};
