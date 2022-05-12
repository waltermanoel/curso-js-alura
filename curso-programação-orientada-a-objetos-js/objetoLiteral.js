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

//user.exibirInfos();

//const exibir = user.exibirInfos;
//exibir();

const exibir = function() {
    console.log(this.nome);
};

const exibirNome = exibir.bind(user);
exibirNome();
exibir();
