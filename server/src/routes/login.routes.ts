const controller = require('../controllers/login.controller');
const authenticated = require('../middlewares/authenticated.middleware');

const router = require('express').Router();

// unprotected route
router.all('/authorize-user', controller.authorizeUser);

// protected route
router.all('/refresh-token', authenticated, controller.refreshToken);

module.exports = router;
