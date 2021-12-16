const { Router } = require('express');
const UserController = require('./controllers/UserController');
const CampaignController = require('./controllers/CampaignController');
const AuthController = require('./controllers/AuthController');
const authMiddleware = require('./middlewares/authMiddleware');

const routes = Router();

routes.post('/auth', AuthController.authenticate);
routes.post('/user', UserController.store);

routes.use(authMiddleware)

routes.get('/user', UserController.index);
routes.delete('/user/:id', UserController.delete);
routes.put('/user/:id', UserController.update);

routes.post('/campaign', CampaignController.store);
routes.get('/campaign', CampaignController.index);
routes.delete('/campaign/:id', CampaignController.delete);
routes.put('/campaign/:id', CampaignController.update);

module.exports = routes;