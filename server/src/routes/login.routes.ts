import authenticated from '../middlewares/authenticated.middleware';
import * as controller from '../controllers/login.controller';
import { Router } from 'express';
import dataItemHandler from '../middlewares/dataItemHandler.middleware';

const loginRoutes = Router();

loginRoutes.post('/authenticate-user', controller.authenticateUser, dataItemHandler);

loginRoutes.post('/refresh-token', authenticated, controller.refreshToken, dataItemHandler);

export default loginRoutes;
