  // Dados dos funcionários
let funcionarios = [
    { id: "ABC", nome: "Frodo", salario: 1500 },
    { id: "DEF", nome: "Aragorn", salario: 3200 },
    { id: "GHI", nome: "GandalF", salario: 7000 },
    { id: "JKL", nome: "Legolas", salario: 5800 }
];

// Função para aplicar o reajuste de 5% no salário
let funcionariosReajustados = funcionarios.map(funcionario => {
    return {
        ...funcionario,
        salario: funcionario.salario * 1.05
    };
});

// Função para exibir os funcionários em uma tabela
function exibirFuncionarios(tabelaId, funcionarios) {
    let tabela = document.getElementById(tabelaId).getElementsByTagName('tbody')[0];
    funcionarios.forEach(funcionario => {
        let row = tabela.insertRow();
        let cellId = row.insertCell(0);
        let cellNome = row.insertCell(1);
        let cellSalario = row.insertCell(2);

        cellId.textContent = funcionario.id;
        cellNome.textContent = funcionario.nome;
        cellSalario.textContent = funcionario.salario.toFixed(2);
    });
}

// Exibir a tabela original e a reajustada
exibirFuncionarios("tabelaOriginal", funcionarios);
exibirFuncionarios("tabelaReajustada", funcionariosReajustados);



 // Dados dos alunos
let alunos = [
    { id: "01", nome: "Chaves", nota: 4.9 },
    { id: "02", nome: "Chiquinha", nota: 7.0 },
    { id: "03", nome: "Quico", nota: 10.0 },
    { id: "04", nome: "Inhonho", nota: 6.5 },
    { id: "05", nome: "Pops", nota: 8.1 }
];

// Filtrar os alunos aprovados
let alunosAprovados = alunos.filter(aluno => aluno.nota >= 7.0);

// Exibir todos os alunos na tabela
function exibirTodosAlunos() {
    let tabela = document.getElementById("tabelaTodos").getElementsByTagName('tbody')[0];
    alunos.forEach(aluno => {
        let row = tabela.insertRow();
        let cellId = row.insertCell(0);
        let cellNome = row.insertCell(1);
        let cellNota = row.insertCell(2);

        cellId.textContent = aluno.id;
        cellNome.textContent = aluno.nome;
        cellNota.textContent = aluno.nota.toFixed(1);
    });
}

// Exibir os alunos aprovados na tabela
function exibirAprovados() {
    let tabela = document.getElementById("tabelaAprovados").getElementsByTagName('tbody')[0];
    alunosAprovados.forEach(aluno => {
        let row = tabela.insertRow();
        let cellId = row.insertCell(0);
        let cellNome = row.insertCell(1);
        let cellNota = row.insertCell(2);

        cellId.textContent = aluno.id;
        cellNome.textContent = aluno.nome;
        cellNota.textContent = aluno.nota.toFixed(1);
    });
}

// Chama as funções para exibir os alunos
exibirTodosAlunos();
exibirAprovados();



 // Dados dos clientes
let clientes = [
    { id: 1, nome: "Jon", sobrenome: "Snow" },
    { id: 2, nome: "Tyrion", sobrenome: "Lannister" },
    { id: 3, nome: "Daenerys", sobrenome: "Targaryen" },
    { id: 4, nome: "Sansa", sobrenome: "Stark" }
];

// Usando map() para retornar o nome completo dos clientes
let nomesCompletos = clientes.map(cliente => `${cliente.nome} ${cliente.sobrenome}`);

// Exibir os clientes na tabela
function exibirClientes() {
    let tabela = document.getElementById("tabelaClientes").getElementsByTagName('tbody')[0];
    clientes.forEach((cliente, index) => {
        let row = tabela.insertRow();
        let cellId = row.insertCell(0);
        let cellNomeCompleto = row.insertCell(1);

        cellId.textContent = cliente.id;
        cellNomeCompleto.textContent = nomesCompletos[index];
    });
}

// Chama a função para exibir os clientes
exibirClientes();



let notas = [7.5, 8.1, 4.0, 5.3, 10.0, 9.7];

document.getElementById('calcular').addEventListener('click', function() {
    // Usando reduce para somar todas as notas
    let soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    // Calculando a média
    let media = soma / notas.length;

    // Exibindo os resultados
    document.getElementById('resultado').innerHTML = `
        
        A soma das notas é: ${soma.toFixed(2)}<br>
        A média das notas é: ${media.toFixed(2)}
    `;
});