// 1. Cria o array de objetos de alunos
const alunos = [
  { nome: 'Ana Silva', nota: 9 },
  { nome: 'Bruno Costa', nota: 5 },
  { nome: 'Carla Dias', nota: 8 },
  { nome: 'Daniel Farias', nota: 3 },
  { nome: 'Ester Gomes', nota: 10 },
  { nome: 'Fernando Lima', nota: 6 }
];

/**
 * 2. Cria uma função que retorna apenas os alunos aprovados (nota >= 6).
 * @param {Array} arrayDeAlunos - O array de alunos a ser filtrado.
 * @returns {Array} Um novo array contendo apenas os alunos aprovados.
 */
const filtrarAprovados = (arrayDeAlunos) => {
  // O método .filter() cria um novo array com todos os elementos
  // que passam no teste implementado pela função fornecida.
  const alunosAprovados = arrayDeAlunos.filter(aluno => {
    // A condição de retorno: a nota do aluno deve ser maior ou igual a 6
    return aluno.nota >= 6;
  });

  return alunosAprovados;
};


// --- Execução do código ---

// Chama a função passando a nossa lista de alunos
const alunosAprovados = filtrarAprovados(alunos);

// Exibe o resultado no console
console.log('Todos os alunos:', alunos);
console.log('---------------------------');
console.log('Alunos Aprovados (Nota >= 6):', alunosAprovados);
