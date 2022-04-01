// paramentros de função

function soma(n1=0, n2=0) {
    return n1 + n2;
}

console.log(soma(8, 4));

// ordem dos parâmetos
function nomeIdade(nome, idade) {
    return `Meu nome é ${nome}, e minha idade é ${idade}`;
}

console.log(nomeIdade("Walter", 17))

function multiplica(n1=1, n2=1) {
    return n1 * n2;
}

console.log(multiplica(soma(4, 5)))
