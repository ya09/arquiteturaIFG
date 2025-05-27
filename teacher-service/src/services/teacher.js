const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const criarProfessor = async (nome, email, password) => {
  return await prisma.professor.create({
    data: { nome, email, password },
  });
};

const listarProfessores = async () => {
  return await prisma.professor.findMany();
};

const buscarProfessorPorId = async (id) => {
  return await prisma.professor.findUnique({
    where: { id },
  });
};

const atualizarProfessor = async (id, dados) => {
  return await prisma.professor.update({
    where: { id },
    data: dados,
  });
};

const deletarProfessor = async (id) => {
  return await prisma.professor.delete({
    where: { id },
  });
};

const lancarNota = async (alunoId, disciplinaId, professorId, valor) => {
  const aluno = await prisma.aluno.findUnique({ where: { id: alunoId } });
  if (!aluno) return null;

  const disciplina = await prisma.disciplina.findUnique({
    where: { id: disciplinaId },
  });
  if (!disciplina) return null;

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

const consultarDisciplinas = async (professorId) => {
  const professor = await prisma.professor.findUnique({
    where: { id: professorId },
    include: { disciplinas: true },
  });

  return professor ? professor.disciplinas : null;
};

module.exports = {
  criarProfessor,
  listarProfessores,
  buscarProfessorPorId,
  atualizarProfessor,
  deletarProfessor,
  lancarNota,
  consultarDisciplinas,
};
