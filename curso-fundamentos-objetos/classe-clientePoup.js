class Cliente {
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    };

    depositar(valor) {
        this.saldo += valor;
    };

    sacar(valor) {
        this.saldo -= valor;
    };

    exibirSaldo() {
        console.log(this.saldo);
    };
};

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoup) {
        super(nome, email, cpf, saldo);
        this.saldoPoup = saldoPoup;
    };

    depositarPoup(valor) {
        this.saldoPoup += valor;
    };

    exibirSaldoPoup(valor) {
        this.saldoPoup -= valor;
    } 

}

const walter = new ClientePoupanca("Walter", "walter@gmail.com", "654694654", 100, 200);

console.log(walter);

walter.depositarPoup(300);

console.log(walter.saldoPoup);
