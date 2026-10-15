/**
 * Rotas do recurso "curso".
 * CRUD completo: GET /curso, GET /curso/:id, POST /curso, PUT /curso/:id, DELETE /curso/:id
 */
const express = require("express");
const router = express.Router();
const db = require("../config/db");

// GET /curso - lista todos os cursos
router.get("/", (req, res) => {
  const sql = "SELECT * FROM curso";
  db.query(sql, (err, resultados) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erro: "Erro ao buscar cursos." });
    }
    return res.status(200).json(resultados);
  });
});

// GET /curso/:id - busca um curso especifico
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM curso WHERE id = ?";
  db.query(sql, [id], (err, resultados) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erro: "Erro ao buscar o curso." });
    }
    if (resultados.length === 0) {
      return res.status(404).json({ erro: "Curso nao encontrado." });
    }
    return res.status(200).json(resultados[0]);
  });
});

// POST /curso - cria um novo curso
router.post("/", (req, res) => {
  const { titulo, cargaHoraria, instrutor } = req.body;

  if (!titulo || !cargaHoraria || !instrutor) {
    return res.status(400).json({
      erro: "Campos obrigatorios: titulo, cargaHoraria, instrutor.",
    });
  }

  const sql = "INSERT INTO curso (titulo, cargaHoraria, instrutor) VALUES (?, ?, ?)";
  db.query(sql, [titulo, cargaHoraria, instrutor], (err, resultado) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erro: "Erro ao criar o curso." });
    }
    return res.status(201).json({
      id: resultado.insertId,
      titulo,
      cargaHoraria,
      instrutor,
    });
  });
});

// PUT /curso/:id - atualiza um curso existente
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { titulo, cargaHoraria, instrutor } = req.body;

  if (!titulo || !cargaHoraria || !instrutor) {
    return res.status(400).json({
      erro: "Campos obrigatorios: titulo, cargaHoraria, instrutor.",
    });
  }

  const sql = "UPDATE curso SET titulo = ?, cargaHoraria = ?, instrutor = ? WHERE id = ?";
  db.query(sql, [titulo, cargaHoraria, instrutor, id], (err, resultado) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erro: "Erro ao atualizar o curso." });
    }
    if (resultado.affectedRows === 0) {
      return res.status(404).json({ erro: "Curso nao encontrado." });
    }
    return res.status(200).json({ id, titulo, cargaHoraria, instrutor });
  });
});

// DELETE /curso/:id - remove um curso
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM curso WHERE id = ?";
  db.query(sql, [id], (err, resultado) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erro: "Erro ao excluir o curso." });
    }
    if (resultado.affectedRows === 0) {
      return res.status(404).json({ erro: "Curso nao encontrado." });
    }
    return res.status(200).json({ mensagem: "Curso excluido com sucesso." });
  });
});

module.exports = router;
