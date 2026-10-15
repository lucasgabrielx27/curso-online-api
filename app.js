/**
 * Configuracao principal da aplicacao Express.
 */
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const cursoRoutes = require("./routes/curso");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ mensagem: "API Curso Online rodando com sucesso." });
});

app.use("/curso", cursoRoutes);

// rota nao encontrada
app.use((req, res) => {
  res.status(404).json({ erro: "Rota nao encontrada." });
});

module.exports = app;
