const controller = require('../controllers/user.controller');
const authenticated = require('../middlewares/authenticated.middleware');

const router = require('express').Router();

router.get('/get-users', authenticated, controller.getUsers);

export { router as userRoutes };
