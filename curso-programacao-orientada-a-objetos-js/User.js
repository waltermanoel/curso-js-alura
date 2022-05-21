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

    set nome(novoNome) {
        if (novoNome === "") {
            throw new Error("Formato não válido");
        } else {
            this.#nome = novoNome;
            console.log("O nome foi alterado para " + novoNome);
        };
    };

    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.#nasc}, ${this.#role}, ${this.#ativo}`;
    };
};
