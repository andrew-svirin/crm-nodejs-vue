const controller = require('../controllers/profile.controller');
const authenticated = require('../middlewares/authenticated.middleware');

const router = require('express').Router();

router.get('/get-profile', authenticated, controller.getProfile);

export { router as profileRoutes };
