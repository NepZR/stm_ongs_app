const { Router } = require('express');
const UserController = require('./app/controllers/UserController');

const CampaignController = require('./app/controllers/CampaignController');
const AuthController = require('./app/controllers/AuthController');
const authMiddleware = require('./app/middlewares/authMiddleware');
const TesteController = require('./app/controllers/TesteController')

const routes = Router();
//routes.get('/test',TesteController.store)
routes.post('/auth', AuthController.authenticate);

routes.post('/user', UserController.store);
routes.get('/user', UserController.index);
routes.delete('/user/:id', UserController.delete);
routes.put('/user/update', authMiddleware, UserController.update);

routes.get('/campaign', authMiddleware, CampaignController.index);
routes.post('/campaign',authMiddleware, CampaignController.store);
routes.delete('/campaign/:id', authMiddleware, CampaignController.delete);
routes.put('/campaign/:id', authMiddleware, CampaignController.update);

module.exports = routes;