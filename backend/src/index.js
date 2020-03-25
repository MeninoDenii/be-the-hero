const express = require("express");
const routes = require('./routes');
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: buscar/listar uma informação do back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * TIPOS DE PARÂMETROS:
 * 
 * Query: parametros nomeados enviados na rota apos a "?" servem para (Filtro,paginação)
 * Route params: Parâmetros para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLITE, PostGreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */


