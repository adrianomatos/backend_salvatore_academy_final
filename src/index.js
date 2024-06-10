require("dotenv").config();
const express = require("express");
const { connectToDatabase } = require("./db/database-connection");
const cors = require("cors");
require("express-async-errors");

// Rotas
const personagemRouter = require("./personagem/personagem.router");

async function main() {
  await connectToDatabase();

  // Express start
  const app = express();

  // MIDDLEWARE Express usando JSON no body
  app.use(express.json());
  // MIDDLEWARECORS
  app.use(cors());

  // Endpoint HOME
  app.get("/", function (req, res) {
    res.send("Hello World");
  });

  // Router de personagens
  app.use("/personagens", personagemRouter);

  // MIDDLEWARE ERROR
  app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({ error: "Algo deu errado!" });
  });

  // Endpoint catch-all para rotas não encontradas
  app.use("*", (req, res) => {
    res.status(404).send({ error: "Endpoint não encontrado" });
  });

  app.listen(3000, () =>
    console.log("Servidor rodando em http://localhost:3000")
  );
}

main();
