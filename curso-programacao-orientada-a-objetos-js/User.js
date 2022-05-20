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

    get nome() {
        return this.#nome;
    };

    get email() {
        return this.#email;
    };

    get nasc() {
        return this.#nasc;
    };

    get role() {
        return this.#role;
    };

    get ativo() {
        return this.#ativo;
    };

    exibirInfos() {
        return `${this.nome}, ${this.email}`;
    };
};
