const express = require('express');

const NotesController = require('../controllers/NotasController');

const routes = express.Router();

routes.get('/notes', NotesController.list);
routes.get('/notes/:id', NotesController.show);
routes.post('/notes', NotesController.create);
routes.put('/notes/:id', NotesController.update);
routes.delete('/notes/:id', NotesController.delete);

module.exports = routes;