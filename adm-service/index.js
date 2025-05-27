const express = require("express");
const app = express();

const adminRoutes = require("./src/routes/adm");

app.use(express.json());

app.use("/api", adminRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo deu errado!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
