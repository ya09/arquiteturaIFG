const express = require("express");
const router = express.Router();
const alunoController = require("../controller/student");

router.post("/", alunoController.cadastrarAluno);
router.get("/:id/notas", alunoController.consultarNotas);
router.post("/:id/notas", alunoController.lancarNota);
router.get("/:id/boletim", alunoController.gerarBoletim);
router.post("/:id/email", alunoController.enviarEmail);

module.exports = router;
