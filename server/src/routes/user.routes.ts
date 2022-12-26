import authenticated from '../middlewares/authenticated.middleware';
import * as controller from '../controllers/user.controller';
import { Router } from 'express';
import dataTableHandler from '../middlewares/dataTableHandler.middleware';

const userRoutes = Router();

userRoutes.get('/get-list', authenticated, controller.getList, dataTableHandler);

export default userRoutes;
