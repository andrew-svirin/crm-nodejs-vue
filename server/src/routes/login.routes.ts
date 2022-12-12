const controller = require('../controllers/login.controller');
const authenticated = require('../middlewares/authenticated.middleware');

const router = require('express').Router();

router.post('/authenticate-user', controller.authenticateUser);

router.post('/refresh-token', authenticated, controller.refreshToken);

export { router as loginRoutes };
