// Estruturas Condicionais
// Condição -> Calculo Lógico
// if - se
const altura = 1.55;

// if(altura >= 1.60) // false
//     console.log("Entrou no brinquedo!"); // a instrução é ignorada
// else
//     console.log("Não entrou no brinquedo!"); // a instrução é executada


// let nivelIngles = 6; // 1, 2, 3, 4, 5
// if(nivelIngles == 1)
//     console.log("Nivel Iniciante");
// else if(nivelIngles == 2)
//     console.log("Nivel Basico");
// else if(nivelIngles == 3)
//     console.log("Nivel Intermediario");
// else if(nivelIngles == 4)
//     console.log("Nivel Avançado");
// else if(nivelIngles == 5)
//         console.log("Nivel Fluente");
// else
//     console.log("Nivel de ingles desconhecido");


// let saldo = 150;
// if(saldo > 1000)
//     console.log("Comprar uma Bolsa");
// else if(saldo > 200)
//     console.log("Comprar um Tênis");
// else if(saldo > 100)
//     console.log("Comprar um livro");


let opcao = "Ver";
if(opcao == "Arquivo") { // true ou false
    console.log("Novo, Abrir, Configurações");
}
else if(opcao == "Editar") {
    console.log("Desfazer, Refazer, Copiar");
}
else if(opcao == "Ver") {
    console.log("Buscar, Aparência, Explorar");
}

// Escopo -> Bloco de Código

// let conseguiuFazerCompra; // flag
// let saldo = 250;

// if(saldo > 200) { 
//     console.log("Fez a compra do tenis");
//     conseguiuFazerCompra = true; 
// }
// else {
//     console.log("Sem grana suficiente");
//     conseguiuFazerCompra = false;
// }

// if(conseguiuFazerCompra) {
//     console.log("Conseguiu fazer a compra!");
// }