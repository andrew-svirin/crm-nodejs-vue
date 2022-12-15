import authenticated from '../middlewares/authenticated.middleware';
import * as controller from '../controllers/user.controller';
import { Router } from 'express';

const userRoutes = Router();

userRoutes.get('/get-users', authenticated, controller.getUsers);

export default userRoutes;
