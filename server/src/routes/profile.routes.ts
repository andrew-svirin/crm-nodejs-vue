import authenticated from '../middlewares/authenticated.middleware';
import * as controller from '../controllers/profile.controller';
import { Router } from 'express';
import dataItemHandler from '../middlewares/dataItemHandler.middleware';

const profileRoutes = Router();

profileRoutes.get('/get-current', authenticated, controller.getCurrent, dataItemHandler);

export default profileRoutes;
