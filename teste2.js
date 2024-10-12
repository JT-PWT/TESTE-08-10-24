/* Questão 2: Crie um programa que exiba em uma tabela e destaque todos os números primos que estão entre 0 e 200.*/

function Primo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function exibirTabela() {
    let tabela = "";
    let primos = [];
    
    
    for (let i = 0; i <= 200; i++) {
        if (Primo(i)) {
            tabela += `[${i}]  `;
            primos.push(i);
        } else {
            tabela += `${i}    `;
        }
        
        if ((i + 1) % 10 === 0) {
            tabela += "\n";
        }
    }

    console.log("Segue tabela de números de 0 a 200 (Os números primos foram destacados entre colchetes):");
    console.log(tabela);
    console.log("Segue os números primos entre 0 e 200 conforme enunciado pela Teacher:", primos.join(", "));
}

exibirTabela();