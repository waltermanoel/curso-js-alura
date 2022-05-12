const user = {
    nome: "Walter",
    email: "walter@gmail.com",
    nascimento: "2000/05/01",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email, this.role);
    }
};

user.exibirInfos();
