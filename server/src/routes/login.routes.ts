import authenticated from '../middlewares/authenticated.middleware';
import * as controller from '../controllers/login.controller';
import { Router } from 'express';
import { itemHandler } from '../middlewares/dataHandler.middleware';

const loginRoutes = Router();

loginRoutes.post('/authenticate-user', controller.authenticateUser, itemHandler);

loginRoutes.post('/refresh-token', authenticated, controller.refreshToken, itemHandler);

export default loginRoutes;
