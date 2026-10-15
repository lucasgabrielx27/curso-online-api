# Curso Online - API REST

Projeto academico da disciplina CMP2304 - Tecnologia de Construcao de Software I (PUC Goias).
Prova 22 - API REST em Node.js para o tema "Curso Online".

## Tecnologias utilizadas
- Node.js
- Express
- nodemon
- morgan (log de requisicoes)
- body-parser
- CORS
- mysql (driver) + MariaDB/MySQL

## Estrutura do projeto
```
curso-online-api/
├── server.js          # ponto de entrada da aplicacao
├── app.js              # configuracao do Express e das rotas
├── config/
│   └── db.js            # conexao com o banco de dados
├── routes/
│   └── curso.js          # rotas CRUD do recurso curso
├── database.sql        # script de criacao do banco/tabela
└── package.json
```

## Como executar

1. Instale as dependencias:
```bash
npm install
```

2. Crie o banco de dados rodando o script `database.sql` no seu
   MySQL/MariaDB (pode ser pelo terminal ou por uma ferramenta como o
   HeidiSQL/DBeaver/phpMyAdmin):
```bash
mysql -u root -p < database.sql
```

3. Ajuste as credenciais do banco, se necessario, em `config/db.js`
   (ou via variaveis de ambiente `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`).

4. Inicie o servidor:
```bash
npm start
```

O servidor sobe em `http://localhost:3000`.

## Recurso: curso

Campos: `id`, `titulo`, `cargaHoraria`, `instrutor`.

| Metodo | Rota          | Descricao                  |
|--------|---------------|-----------------------------|
| GET    | /curso        | Lista todos os cursos       |
| GET    | /curso/:id    | Busca um curso pelo id      |
| POST   | /curso        | Cria um novo curso          |
| PUT    | /curso/:id    | Atualiza um curso existente |
| DELETE | /curso/:id    | Remove um curso             |

### Exemplo de corpo (POST / PUT)
```json
{
  "titulo": "Introducao ao Node.js",
  "cargaHoraria": 40,
  "instrutor": "Maria Souza"
}
```

Todas as rotas retornam respostas em JSON, incluindo mensagens de erro
coerentes (400, 404, 500) e utilizam parametros vinculados (`?`) nas
consultas SQL para evitar SQL Injection.
