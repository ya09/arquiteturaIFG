const express = require("express");
const app = express();
const teacherRoutes = require("./src/routes/teacher.js");

app.use(express.json());

app.use("/api", teacherRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo deu errado!");
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
