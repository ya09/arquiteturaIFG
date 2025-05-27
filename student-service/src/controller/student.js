const alunoService = require("../services/student");

const cadastrarAluno = async (req, res) => {
  const { nome, email, password } = req.body;
  try {
    const aluno = await alunoService.cadastrarAluno(nome, email, password);
    res.status(201).json(aluno);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const consultarNotas = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const notas = await alunoService.consultarNotas(id);
    if (!notas) return res.status(404).send("Aluno não encontrado");
    res.json(notas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const lancarNota = async (req, res) => {
  const alunoId = parseInt(req.params.id);
  const { disciplinaId, professorId, valor } = req.body;

  try {
    const nota = await alunoService.lancarNota(
      alunoId,
      disciplinaId,
      professorId,
      valor
    );
    if (!nota) return res.status(404).send("Aluno não encontrado");
    res.json(nota);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const gerarBoletim = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const boletim = await alunoService.gerarBoletim(id);
    if (!boletim) return res.status(404).send("Aluno não encontrado");
    res.json(boletim);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const enviarEmail = async (req, res) => {
  const id = parseInt(req.params.id);
  const { assunto, mensagem } = req.body;

  try {
    const result = await alunoService.enviarEmailParaAluno(
      id,
      assunto,
      mensagem
    );
    if (!result) return res.status(404).send("Aluno não encontrado");
    res.send("Email enviado com sucesso");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  cadastrarAluno,
  consultarNotas,
  lancarNota,
  gerarBoletim,
  enviarEmail,
};
