const { Router } = require('express');

const CooperadoController = require('./app/Controllers/CooperadoController');

const PautaController = require('./app/Controllers/PautaController');

const VotoController = require('./app/Controllers/VotoController');



const routes = new Router();

routes.post("/cooperado", CooperadoController.store);
routes.get("/cooperado", CooperadoController.show);


routes.post("/pauta", PautaController.store);
routes.get("/pauta", PautaController.show);


routes.post("/voto", VotoController.store);
routes.get("/voto", VotoController.show);




module.exports = routes;