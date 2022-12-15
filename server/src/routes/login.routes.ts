import authenticated from '../middlewares/authenticated.middleware';
import * as controller from '../controllers/login.controller';
import { Router } from 'express';

const loginRoutes = Router();

loginRoutes.post('/authenticate-user', controller.authenticateUser);

loginRoutes.post('/refresh-token', authenticated, controller.refreshToken);

export default loginRoutes;
