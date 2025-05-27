const alunoService = require("../services/student");

const cadastrarAluno = (req, res) => {
  const { nome, email } = req.body;
  const aluno = alunoService.cadastrarAluno(nome, email);
  res.status(201).json(aluno);
};

const consultarNotas = (req, res) => {
  const id = parseInt(req.params.id);
  const notas = alunoService.consultarNotas(id);
  if (!notas) return res.status(404).send("Aluno não encontrado");
  res.json(notas);
};

const lancarNota = (req, res) => {
  const id = parseInt(req.params.id);
  const { nota } = req.body;
  const aluno = alunoService.lancarNota(id, nota);
  if (!aluno) return res.status(404).send("Aluno não encontrado");
  res.json(aluno);
};

const gerarBoletim = (req, res) => {
  const id = parseInt(req.params.id);
  const boletim = alunoService.gerarBoletim(id);
  if (!boletim) return res.status(404).send("Aluno não encontrado");
  res.json(boletim);
};

const enviarEmail = async (req, res) => {
  const id = parseInt(req.params.id);
  const { assunto, mensagem } = req.body;
  try {
    await alunoService.enviarEmailParaAluno(id, assunto, mensagem);
    res.send("Email enviado com sucesso");
  } catch (err) {
    res.status(500).send("Erro ao enviar email");
  }
};

module.exports = {
  cadastrarAluno,
  consultarNotas,
  lancarNota,
  gerarBoletim,
  enviarEmail,
};
