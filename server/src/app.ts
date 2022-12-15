import express, { Express } from 'express';
import cors from 'cors';

const indexRouter = require('./routes/index');
const notFound = require('./middlewares/notFound.middleware');
const errorHandler = require('./middlewares/errorHandler.middleware');

const app: Express = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', indexRouter);

app.use(notFound);

app.use(errorHandler);

module.exports = app;
