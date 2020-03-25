const express = require("express");

const OngControler = require('./controlers/OngControler');
const IncidentControler = require('./controlers/IncidentControler');
const ProfileControler = require('./controlers/ProfileControler');
const SessionControler = require('./controlers/SessionControler');


const routes = express.Router();


routes.get('/ongs', OngControler.index);
routes.post('/ongs', OngControler.create);

routes.get('/profile', ProfileControler.index);

routes.post('/sessions', SessionControler.create);


routes.post('/incidents', IncidentControler.create);
routes.get('/incidents', IncidentControler.index);
routes.delete('/incidents/:id',IncidentControler.delete);
    
module.exports = routes;