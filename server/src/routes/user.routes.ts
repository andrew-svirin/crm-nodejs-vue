import authenticated from '../middlewares/authenticated.middleware';
import * as controller from '../controllers/user.controller';
import * as validator from '../validators/user.validator';
import { Router } from 'express';
import { itemHandler, tableHandler, emptyHandler } from '../middlewares/dataHandler.middleware';

const userRoutes = Router();

userRoutes.get('/:id/get', authenticated, controller.getItem, itemHandler);

userRoutes.get('/get-list', authenticated, controller.getList, tableHandler);

userRoutes.post('/create', authenticated, ...validator.create, controller.createItem, itemHandler);

userRoutes.put('/:id/update', authenticated, ...validator.update, controller.updateItem, itemHandler);

userRoutes.delete('/:id/delete', authenticated, controller.deleteItem, emptyHandler);

export default userRoutes;
