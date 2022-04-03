const alunos = ["João", "Juliana", "Caio", "Ana", "Walter"];
const mediasDosAlunos = [10, 7, 9, 6, 9.5];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

console.log(listaDeNotasEAlunos);

alunos.pop();
mediasDosAlunos.pop();

for(let i = 0; i < listaDeNotasEAlunos[0].length; i++) {
    console.log(`Aluno ${listaDeNotasEAlunos[0][i]}, com a média de ${listaDeNotasEAlunos[1][i]}`)
};

console.log(listaDeNotasEAlunos);
