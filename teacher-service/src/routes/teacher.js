const express = require("express");
const router = express.Router();
const teacherController = require("../controller/teacher");

router.post("/professores", teacherController.criarProfessor);
router.get("/professores", teacherController.listarProfessores);
router.get("/professores/:id", teacherController.buscarProfessorPorId);
router.put("/professores/:id", teacherController.atualizarProfessor);
router.delete("/professores/:id", teacherController.deletarProfessor);

router.post("/professores/:id/lancar-nota", teacherController.lancarNota);

router.get(
  "/professores/:id/disciplinas",
  teacherController.consultarDisciplinas
);

module.exports = router;
