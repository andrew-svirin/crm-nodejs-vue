import express, { Express } from 'express';
import cors from 'cors';

const indexRouter = require('./src/routes/index');
const notFound = require('./src/middlewares/notFound.middleware');
const errorHandler = require('./src/middlewares/errorHandler.middleware');
const dbConnect = require('./src/middlewares/dbConnect.middleware');
const loadConfig = require('./src/middlewares/loadConfig.middleware');

const app: Express = express();

app.use(loadConfig)

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(dbConnect)

app.use('/', indexRouter);

app.use(notFound);

app.use(errorHandler);

module.exports = app;
