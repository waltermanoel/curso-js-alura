const clientes = [
    {
        nome: "Walter",
        cpf: "556496466",
        dependentes: [
            {
            nome: "Sara Melo",
            parentesco: "filha",
            dataNasc: "20/04/1990"
            }, 
            {
            nome:"Raiza Silva",
            parentesco: "irmã",
            dataNasc: "20/04/1999"
            }
        ]
    },
    {
        nome: "Ana",
        cpf: "55649456",
        dependentes: [
            {
            nome: "Raiane",
            parentesco: "filha",
            dataNasc: "20/04/2000"
            }, 
            {
            nome:"pedro",
            parentesco: "filho",
            dataNasc: "20/04/1999"
            }
        ]
    }
];

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.table(listaDependentes);

/*const clientesEspalhados = [...clientes];

console.log(clientesEspalhados);*/
