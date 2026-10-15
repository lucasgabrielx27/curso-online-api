-- Script de criacao do banco e da tabela para o projeto Curso Online

CREATE DATABASE IF NOT EXISTS curso_online_db;
USE curso_online_db;

CREATE TABLE IF NOT EXISTS curso (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150) NOT NULL,
  cargaHoraria INT NOT NULL,
  instrutor VARCHAR(100) NOT NULL
);

-- Dados de exemplo (opcional)
INSERT INTO curso (titulo, cargaHoraria, instrutor) VALUES
  ('Logica de Programacao', 40, 'Carlos Souza'),
  ('Desenvolvimento Web com Node.js', 60, 'Ana Lima'),
  ('Banco de Dados MySQL', 30, 'Pedro Alves');
