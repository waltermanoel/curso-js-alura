class User {
    constructor(nome, email, nasc, role, ativo=true) {
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;
        this.role = role || "estudante";
        this.ativo = ativo;
    };

    exibirInfos() {
        return `${this.nome}, ${this.email}`;
    };
};

const novoUser = new User("Pedro", "pedro@gmail.com", "20/02/2006");

console.log(novoUser);
console.log(novoUser.exibirInfos());

console.log(User.prototype.isPrototypeOf(novoUser));
