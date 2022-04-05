const notas = [10, 6.5, 8, 7.5];

console.log(media(notas));

function media(notas, PF=1) {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    };
    return (somaDasNotas / notas.length).toFixed(PF);
};
