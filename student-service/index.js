const express = require("express");
const app = express();
const alunoRoutes = require("./src/routes/student.js");

app.use(express.json());
app.use("/alunos", alunoRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
