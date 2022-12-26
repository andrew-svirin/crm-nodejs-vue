import authenticated from '../middlewares/authenticated.middleware';
import * as controller from '../controllers/profile.controller';
import { Router } from 'express';
import dataItemHandler from '../middlewares/dataItemHandler.middleware';

const profileRoutes = Router();

profileRoutes.get('/get-profile', authenticated, controller.getProfile, dataItemHandler);

export default profileRoutes;
