const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const cadastrarDisciplina = async (nome) => {
  return await prisma.disciplina.create({
    data: { nome },
  });
};

const vincularProfessorDisciplina = async (disciplinaId, professorId) => {
  return await prisma.disciplina.update({
    where: { id: disciplinaId },
    data: { professorId },
  });
};

const vincularAlunoDisciplina = async (alunoId, disciplinaId, professorId) => {
  return await prisma.nota.create({
    data: {
      valor: 0,
      alunoId,
      disciplinaId,
      professorId,
    },
  });
};

module.exports = {
  cadastrarDisciplina,
  vincularProfessorDisciplina,
  vincularAlunoDisciplina,
};
