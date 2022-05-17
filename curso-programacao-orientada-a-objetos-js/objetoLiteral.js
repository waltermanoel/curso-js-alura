const user = {
    nome: "Walter",
    email: "walter@gmail.com",
    nascimento: "2000/05/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email, this.role);
    }
};

const admin = {
    nome: "Ana",
    email: "ana@gmail.com",
    role: "admin",
    criarCurso() {
        console.log("curso criado");
    }
};

Object.setPrototypeOf(admin, user);

admin.criarCurso();
admin.exibirInfos();
