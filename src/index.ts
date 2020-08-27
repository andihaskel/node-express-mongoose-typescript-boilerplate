import express, {Application} from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import * as dotenv from 'dotenv';


const app: Application = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

dotenv.config();

app.use('/', indexRouter);
// app.use('/users', usersRouter);

  // listen for requests
  app.listen(3000, () => {
    console.log('Server is listening on port 3000')
  })


module.exports = app;
