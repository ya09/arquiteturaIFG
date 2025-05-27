const teacherService = require("../services/teacher");

const criarProfessor = async (req, res) => {
  const { nome, email, password } = req.body;

  try {
    const professor = await teacherService.criarProfessor(
      nome,
      email,
      password
    );
    res.status(201).json(professor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const listarProfessores = async (req, res) => {
  try {
    const professores = await teacherService.listarProfessores();
    res.json(professores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const buscarProfessorPorId = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const professor = await teacherService.buscarProfessorPorId(id);
    if (!professor) return res.status(404).send("Professor não encontrado");
    res.json(professor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const atualizarProfessor = async (req, res) => {
  const id = parseInt(req.params.id);
  const dados = req.body;

  try {
    const professor = await teacherService.atualizarProfessor(id, dados);
    res.json(professor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deletarProfessor = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    await teacherService.deletarProfessor(id);
    res.send("Professor deletado com sucesso");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const lancarNota = async (req, res) => {
  const professorId = parseInt(req.params.id);
  const { alunoId, disciplinaId, valor } = req.body;

  try {
    const nota = await teacherService.lancarNota(
      alunoId,
      disciplinaId,
      professorId,
      valor
    );
    if (!nota)
      return res.status(404).send("Aluno ou disciplina não encontrados");
    res.json(nota);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const consultarDisciplinas = async (req, res) => {
  const professorId = parseInt(req.params.id);

  try {
    const disciplinas = await teacherService.consultarDisciplinas(professorId);
    if (!disciplinas) return res.status(404).send("Professor não encontrado");
    res.json(disciplinas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
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
