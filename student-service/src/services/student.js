const Aluno = require("../models/student");
const emailSender = require("../utils/email");

let alunos = [];

const cadastrarAluno = (nome, email) => {
  const id = alunos.length + 1;
  const aluno = new Aluno(id, nome, email);
  alunos.push(aluno);
  return aluno;
};

const consultarNotas = (id) => {
  const aluno = alunos.find((a) => a.id === id);
  return aluno ? aluno.notas : null;
};

const lancarNota = (id, nota) => {
  const aluno = alunos.find((a) => a.id === id);
  if (!aluno) return null;
  aluno.notas.push(nota);
  return aluno;
};

const gerarBoletim = (id) => {
  const aluno = alunos.find((a) => a.id === id);
  if (!aluno) return null;
  return {
    nome: aluno.nome,
    notas: aluno.notas,
    media: aluno.notas.reduce((a, b) => a + b, 0) / (aluno.notas.length || 1),
  };
};

const enviarEmailParaAluno = async (id, assunto, mensagem) => {
  const aluno = alunos.find((a) => a.id === id);
  if (!aluno) return null;
  return await emailSender.sendEmail(aluno.email, assunto, mensagem);
};

module.exports = {
  cadastrarAluno,
  consultarNotas,
  lancarNota,
  gerarBoletim,
  enviarEmailParaAluno,
};
