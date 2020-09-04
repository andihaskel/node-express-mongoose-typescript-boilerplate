import express, {Application} from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import * as dotenv from 'dotenv';
import helmet from 'helmet';


const app: Application = express();
dotenv.config();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

  // listen for requests
  app.listen(3000, () => {
    console.log('Server is listening on port 3000')
  })


module.exports = app;
