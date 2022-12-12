import { Request, Response } from 'express';

// import all the routes here
import { loginRoutes } from './login.routes';
import { profileRoutes } from './profile.routes';

const router = require('express').Router();

/* GET home page. */
router.get('/', function (req: Request, res: Response) {
  res.json({title: 'CRM API'});
});

router.use('/login', loginRoutes);
router.use('/profile', profileRoutes);

module.exports = router;
