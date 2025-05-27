const adminService = require("../services/adminService");

const cadastrarDisciplina = async (req, res) => {
  const { nome } = req.body;
  try {
    const disciplina = await adminService.cadastrarDisciplina(nome);
    res.status(201).json(disciplina);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const vincularProfessorDisciplina = async (req, res) => {
  const { disciplinaId, professorId } = req.body;
  try {
    const disciplina = await adminService.vincularProfessorDisciplina(
      disciplinaId,
      professorId
    );
    res.json(disciplina);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const vincularAlunoDisciplina = async (req, res) => {
  const { alunoId, disciplinaId, professorId } = req.body;
  try {
    const nota = await adminService.vincularAlunoDisciplina(
      alunoId,
      disciplinaId,
      professorId
    );
    res.json({ message: "Aluno vinculado à disciplina com sucesso", nota });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  cadastrarDisciplina,
  vincularProfessorDisciplina,
  vincularAlunoDisciplina,
};
