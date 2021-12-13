const { Router } = require('express');
const router = Router();

const userController = require('./controllers/UserController')
router.post('/sign-in', userController.signIn);
router.post('/sign-up', userController.signUp);

module.exports = router;