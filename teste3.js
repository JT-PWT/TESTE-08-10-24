/*Questão 3: "Liz é uma estudante que está aprendendo JavaScript e precisa organizar suas tarefas diárias. 
Ela decidiu usar um vetor para guardar suas tarefas.
As tarefas são descritas apenas por um texto e armazenadas em um vetor da seguinte forma:
const tarefas = [""Estudar JavaScript"", ""Fazer exercícios"", ""Ler um livro""];

Adicione ao código:
Listar Tarefas: Crie uma função chamada listarTarefas que exiba no console todas as tarefas que Liz tem. 
A saída deve ser parecida com esta:

1. Estudar JavaScript 
2. Fazer exercícios 
3. Ler um livro*/

const tarefas = ["Estudar JavaScript", "Fazer exercícios", "Ler um livro"];

function listarTarefas() {
    console.log("Lista de Tarefas: ");
    for (let i = 0; i < tarefas.length; i++) {
        console.log(`${i + 1}. ${tarefas[i]}`);
    }
}

/*Adicionar Tarefas: Implemente uma função chamada adicionarTarefa que permita a Liz adicionar uma nova tarefa ao vetor. 
A função deve receber um parâmetro, que é a descrição da nova tarefa. Após adicionar, chame a função listarTarefas 
para mostrar a lista atualizada.*/

function adicionarTarefa(novaTarefa) {
    tarefas.push(novaTarefa); 
    listarTarefas();
}

/*Remover Tarefas: Crie uma função chamada removerTarefa que permita a Liz remover uma tarefa da lista. 
A função deve receber o índice da tarefa a ser removida (por exemplo, 0 para a primeira tarefa) e atualizar o vetor.
Após remover, chame a função listarTarefas para mostrar a lista atualizada.*/

function removerTarefas(indice) {
    if (indice >= 0 && indice < tarefas.length) {
        tarefas.splice(indice, 1); 
        listarTarefas(); 
    }
}

/*Dicas para Respostas:
Na função listarTarefas, utilize um loop for para percorrer o vetor e imprimir cada tarefa com seu respectivo índice.
Na função adicionarTarefa, use o método push para adicionar a nova tarefa ao vetor.
Na função removerTarefa, utilize o método splice para remover a tarefa no índice especificado."*/

listarTarefas();
adicionarTarefa("Fazer compras");
removerTarefas(1); 

     
