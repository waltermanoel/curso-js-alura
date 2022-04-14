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

const gustavo = new Cliente("Gustavo", "gustavo@gmail.com", "6854949998", 5000);

gustavo.exibirSaldo();

console.log(gustavo);
