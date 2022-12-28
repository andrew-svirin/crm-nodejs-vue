import authenticated from '../middlewares/authenticated.middleware';
import * as controller from '../controllers/user.controller';
import * as validator from '../validators/user.validator';
import { Router } from 'express';
import dataTableHandler from '../middlewares/dataTableHandler.middleware';
import dataItemHandler from '../middlewares/dataItemHandler.middleware';

const userRoutes = Router();

userRoutes.get('/:id/get', authenticated, controller.get, dataItemHandler);

userRoutes.get('/get-list', authenticated, controller.getList, dataTableHandler);

userRoutes.post('/create', authenticated, ...validator.create, controller.create, dataItemHandler);

userRoutes.put('/:id/update', authenticated, ...validator.update, controller.update, dataItemHandler);

export default userRoutes;
