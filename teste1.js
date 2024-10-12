/* Elaborar um programa que adicione números a um vetor. O programa deve impedir a inclusão de números repetidos. 
 Exibir a lista de números a cada inclusão.
 Inicializando um array para armazenar os números*/

let numeros = [];

function adicionarNumero(novoNumero) {
    if (numeros.includes(novoNumero)) {
        console.log(`O número ${novoNumero} já está na lista.`);
    } else {
        numeros.push(novoNumero);
        console.log(`Número ${novoNumero} adicionado à lista.`);
    }
    
    listarNumeros();
}

function listarNumeros() {
    console.log("Lista de números:");
    console.log(numeros.join(" , "));
}

adicionarNumero(1);  
adicionarNumero(3);  
adicionarNumero(1);  
adicionarNumero(7);  