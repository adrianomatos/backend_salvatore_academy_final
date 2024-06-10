const { MongoClient, ObjectId } = require("mongodb");

const dbUrl = process.env.DATABASE_URL;
const dbName = "mongodb_integrar_com_frontend";
// const dbName = "mongodb_arquitetura_mvc";

const client = new MongoClient(dbUrl);

async function connectToDatabase() {
  console.log("Conectando ao Banco de Dados...");
  await client.connect();
  console.log("Banco de Dados conectado com sucesso!");
}

function getDatabase() {
  return client.db(dbName);
}

module.exports = {
  connectToDatabase,
  getDatabase,
};
