function cliente(nome, cpf, email, saldo ) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    };
};

const walter = new cliente("Walter", "56444694", "walter@gmail.com", 1000);

console.log(walter)
