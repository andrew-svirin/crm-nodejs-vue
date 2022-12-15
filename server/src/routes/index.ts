import { Request, Response, Router } from 'express';
import loginRoutes from './login.routes';
import profileRoutes from './profile.routes';
import userRoutes from './user.routes';

const indexRouter = Router();

/* GET home page. */
indexRouter.get('/', function (req: Request, res: Response) {
  res.json({title: 'CRM API'});
});

indexRouter.use('/login', loginRoutes);
indexRouter.use('/profile', profileRoutes);
indexRouter.use('/user', userRoutes);

export default indexRouter;
