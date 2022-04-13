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

function oferecerSeguro(object) {
    const propsClientes =  Object.keys(object);
    if(propsClientes.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${object.nome}`);
    };
};

// Object.values(); Object.keys(); Object.entrides();

console.log(Object.entries(cliente));
oferecerSeguro(cliente);
