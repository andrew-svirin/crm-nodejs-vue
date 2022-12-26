import express, { Express } from 'express';
import cors from 'cors';
import notFound from './middlewares/notFound.middleware';
import errorHandler from './middlewares/errorHandler.middleware';
import indexRouter from './routes';

const app: Express = express();

app.use(cors({
  exposedHeaders: ['X-Per-Page-Items', 'X-Total-Items'],
}));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', indexRouter);

app.use(notFound);

app.use(errorHandler);

export default app;
