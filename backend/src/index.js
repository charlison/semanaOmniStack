/*
metodos http
GET: buscar/listar algo no back-end
POST: criar algum registro no back-end
PUT: quando se quer alterar algo no back-end
DELETE: quando se quer remover algo 

tipos de parametros
QUERY PARAMS: Parametros enviados junto a rota usando ?)filtros/paginação
ROUTE PARAS: Usados para identificar recursos
REQUEST BODY: 

//banco de dados
DRIVER: select * from usuers
QUERYBUILDER: table('user).select('*').where()

*/
const cors = require('cors');
const express = require('express');
const rotas = require('./rotas');
const app = express();

app.use(cors());
app.use(express.json());
app.use(rotas);

app.listen(3333);