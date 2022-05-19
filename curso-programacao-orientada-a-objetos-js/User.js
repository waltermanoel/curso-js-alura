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

    #montaObjUser() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nasc: this.#email,
            role: this.#role,
            ativo: this.#ativo
        });
    };

    exibirInfos() {
        const objUser = this.#montaObjUser()
        return `${objUser.nome}, ${objUser.email}`;
    };
};
