function Cliente(nome, cpf, email, saldo ) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    };
};

const raiza = new Cliente("Raiza", "649494984", "raiza@gmail.com", 100)

console.log(raiza)

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
};

const walter = new ClientePoupanca("Walter", "874784848", "walter@gmail.com", 200, 200);



ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
};
console.log(walter);

walter.depositarPoup(20);

console.log(walter.saldoPoup);
