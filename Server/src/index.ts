import express, { Express, Request, Response } from 'express';
const Users = require('./Controllers/user.controller');
const usernameValidation = require('./Middlewares/user.middleware');
const cors = require('cors');
const dbConnect = require('./ConnectDB');
const app: Express = express();
const connectDB = require('./ConnectDB');
const port = 8000;
import { errorHandler } from './Middlewares/error.middleware';
const cookieParser = require('cookie-parser')



app.use(cors());
app.use(cookieParser());

app.get('/', (req: Request, res: Response) => {
  res.send('server is up');
});

app.use('/user',Users);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`⚡️🤩[server]: Server is running at http://localhost:${port}`);
});