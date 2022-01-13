const { Router } = require('express');
const UserController = require('./app/controllers/UserController');

const CampaignController = require('./app/controllers/CampaignController');
const AuthController = require('./app/controllers/AuthController');
const authMiddleware = require('./app/middlewares/authMiddleware');

const routes = Router();
routes.post('/auth', AuthController.authenticate);

routes.post('/user', UserController.store);
routes.get('/user', authMiddleware, UserController.index);
//routes.delete('/user/:id', UserController.delete);
routes.put('/user/update', authMiddleware, UserController.update);

routes.post('/campaign', authMiddleware, CampaignController.store);
routes.get('/campaign', authMiddleware, CampaignController.index);
routes.get('/campaign/:id', CampaignController.show);
//routes.delete('/campaign/:id', authMiddleware, CampaignController.delete);
routes.put('/campaign/:id', authMiddleware, CampaignController.update);

module.exports = routes;