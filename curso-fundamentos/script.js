// var

/*var altura = 5;
var comprimento = 7;

area = altura * comprimento;

console.log(area);

var area;*/

// let 

/*let forma = "retângulo";
let altura = 3;
let comprimento = 9;

let area;

if (forma === "retângulo") {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area)*/

// const 

const forma = "quadrado";
const altura = 5;
const comprimento = 7;
//let area;

/*if (forma === "quadrado") {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}*/

//console.log(area);

function area(forma, altura, largura) {
    if(forma === "quadrado") {
        return altura * largura;
    } else if(forma === "triangulo"){
        return (altura * largura) / 2;
    }
}

console.log(area("triangulo", 3, 10));
