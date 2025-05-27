const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const emailSender = require("../utils/email");

const cadastrarAluno = async (nome, email, password) => {
  return await prisma.aluno.create({
    data: { nome, email, password },
  });
};

const consultarNotas = async (id) => {
  const aluno = await prisma.aluno.findUnique({
    where: { id },
    include: { notas: true },
  });
  return aluno ? aluno.notas : null;
};

const lancarNota = async (alunoId, disciplinaId, professorId, valor) => {
  const aluno = await prisma.aluno.findUnique({ where: { id: alunoId } });
  if (!aluno) return null;

  const nota = await prisma.nota.create({
    data: {
      valor,
      alunoId,
      disciplinaId,
      professorId,
    },
  });

  return nota;
};

const gerarBoletim = async (id) => {
  const aluno = await prisma.aluno.findUnique({
    where: { id },
    include: {
      notas: {
        include: { disciplina: true },
      },
    },
  });

  if (!aluno) return null;

  const media =
    aluno.notas.reduce((acc, n) => acc + n.valor, 0) /
    (aluno.notas.length || 1);

  return {
    nome: aluno.nome,
    notas: aluno.notas.map((n) => ({
      disciplina: n.disciplina.nome,
      valor: n.valor,
    })),
    media,
  };
};

const enviarEmailParaAluno = async (id, assunto, mensagem) => {
  const aluno = await prisma.aluno.findUnique({ where: { id } });
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
