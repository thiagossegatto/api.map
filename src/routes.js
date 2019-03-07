const express = require('express');
const routes = express.Router();
const Properties = require('./controllers/Properties');

routes.post('/properties', Properties.getProperties);

module.exports = routes;