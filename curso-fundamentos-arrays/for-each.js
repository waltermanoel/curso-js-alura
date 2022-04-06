const notas = [10, 6.5, 8, 7.5];

function media(notas, pF=1) {
    let somaDasNotas = 0;

    //callback
    notas.forEach(nota => {
        somaDasNotas += nota;
    });
    return (somaDasNotas / notas.length).toFixed(pF)
};

console.log(media(notas));
