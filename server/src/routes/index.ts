import { NextFunction, Request, Response } from 'express';

// import all the routes here
const loginRoutes = require('./login.routes');

const router = require('express').Router();

/* GET home page. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
  res.json({title: 'CRM API'});
});

router.use('/login', loginRoutes);

module.exports = router;
