const express = require('express');
const rotas = express.Router();
const ongControler = require('./controlers/ongControler');
const casoControler = require('./controlers/casoControler');
const perfilControler = require('./controlers/perfilControler');
const sessaoControler = require('./controlers/sessaoControler');

rotas.post('/sessao', sessaoControler.create);

rotas.post('/ongs', ongControler.create);
rotas.get('/ongs', ongControler.listAll);

rotas.post('/casos', casoControler.create);
rotas.get('/casos', casoControler.listAll);
rotas.delete('/casos/:id', casoControler.delete);

rotas.get('/perfil', perfilControler.list);

module.exports = rotas; 