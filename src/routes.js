const {Router} = require('express');
const DevController = require('./controller/DevController');
const SearchController = require('./controller/SearchController');

const routes = Router();

// Tipos de parâmetros: 

// Query Params: request.query (Filtros, Ordenação, Paginação, ....)
// Route Params: request.params (Identificar o recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);


module.exports = routes;