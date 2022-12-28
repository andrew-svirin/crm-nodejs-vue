import authenticated from '../middlewares/authenticated.middleware';
import * as controller from '../controllers/profile.controller';
import { Router } from 'express';
import { itemHandler } from '../middlewares/dataHandler.middleware';

const profileRoutes = Router();

profileRoutes.get('/get-current', authenticated, controller.getCurrent, itemHandler);

export default profileRoutes;
