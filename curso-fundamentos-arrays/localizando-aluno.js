const alunos = ["João", "Juliana", "Caio", "Ana", "Walter"];
const mediasDosAlunos = [10, 7, 9, 6, 9.5];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + " a sua média é " + listaDeNotasEAlunos[1][indice];
    } else {
        return "Aluno não eatá cadastrado!"
    }
}

console.log(exibeNomeNota("Ana"));
