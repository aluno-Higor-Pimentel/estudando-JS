/*function criarTriangulo(altura) {
    for (var linha = 1; linha <= altura; linha++) {
    var linhaAtual = '';
    for (var coluna = 1; coluna <= linha; coluna++) {
        linhaAtual += '* ';
    }
    console.log(linhaAtual);
    }
}*/

/*for (var i = 1; i <= 20; i++) {
    console.log(i);
}*/

var termo1 = 0;
var termo2 = 1;
var contador = 1;

/*console.log(termo1); // Imprime o primeiro termo

while (contador < 10) {
console.log(termo2);
var proximoTermo = termo1 + termo2;
termo1 = termo2;
termo2 = proximoTermo;
contador++;
}*/

function calcularSomaImpares(numero) {
    var soma = 0;
    for (var i = 1; i <= numero; i++) {
    if (i % 2 !== 0) {
        soma += i;
    }
    }
return soma;
}
  console.log(calcularSomaImpares(20)); // Exemplo: calcula a soma dos números ímpares até o número 10
