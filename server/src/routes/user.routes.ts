import authenticated from '../middlewares/authenticated.middleware';
import * as controller from '../controllers/user.controller';
import { Router } from 'express';
import dataTableHandler from '../middlewares/dataTableHandler.middleware';

const userRoutes = Router();

userRoutes.get('/get-users', authenticated, controller.getUsers, dataTableHandler);

export default userRoutes;
