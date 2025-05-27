const express = require("express");
const router = express.Router();
const adminController = require("../controller/adm");

router.post("/disciplinas", adminController.cadastrarDisciplina);

router.post(
  "/disciplinas/vincular-professor",
  adminController.vincularProfessorDisciplina
);

router.post(
  "/disciplinas/vincular-aluno",
  adminController.vincularAlunoDisciplina
);

module.exports = router;
