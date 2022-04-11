const cliente = {
    nome: "Walter",
    idade: 17,
    cpf: "556496466",
    email: "walter@gmail.com",
    dependentes: [
        {
        nome: "Sara Melo",
        parentesco: "filha",
        dataNasc: "20/04/1990"}, 
        {
        nome:"Raiza Silva",
        parentesco: "irmã",
        dataNasc: "20/04/1999"
        }
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor;
    },
    sacar: function(valor){
        this.saldo -= valor;
    }
};

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);

cliente.sacar(100);
console.log(cliente.saldo);
