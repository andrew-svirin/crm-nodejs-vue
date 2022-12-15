import authenticated from '../middlewares/authenticated.middleware';
import * as controller from '../controllers/profile.controller';
import { Router } from 'express';

const profileRoutes = Router();

profileRoutes.get('/get-profile', authenticated, controller.getProfile);

export default profileRoutes;
