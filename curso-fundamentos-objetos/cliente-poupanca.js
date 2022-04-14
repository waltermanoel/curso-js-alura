function cliente(nome, cpf, email, saldo ) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    };
};

function clientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
};

const walter = new clientePoupanca("Walter", "874784848", "walter@gmail.com", 200, 200);

console.log(walter);

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
};

walter.depositarPoup(20);

console.log(walter.saldoPoup);
