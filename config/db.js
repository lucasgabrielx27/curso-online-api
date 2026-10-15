/**
 * Configuracao e conexao com o banco MySQL/MariaDB.
 * Ajuste as credenciais conforme o seu ambiente local.
 */
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "curso_online_db",
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err.message);
    return;
  }
  console.log("Conectado ao banco de dados MySQL/MariaDB com sucesso.");
});

module.exports = connection;
