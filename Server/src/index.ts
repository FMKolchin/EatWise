import express, { Express, Request, Response } from 'express';
const Users = require('./Routes/user.route');
const Token = require('./Routes/token.route');
const Admin=require('./Routes/admin.route');
const Nutrition = require('./Routes/nutrition.route');
const connectDB = require('./ConnectDB');
const cors = require('cors');
const app: Express = express();
//don't delete even though its not used!!! important for connecting to DB!!

const port = 8000;
import { errorHandler } from './Middlewares/error.middleware';
// const cookieParser = require('cookie-parser')

app.use(cors());
// app.use(cookieParser());

app.get('/', (req: Request, res: Response) => {
  res.send('server is up');
});

app.use('/user',Users);
app.use('/token',Token);
app.use('/nutrition',Nutrition)
app.use('/admin',Admin)

app.use(errorHandler);

app.listen(port, () => {
  console.log(`⚡️🤩[server]: Server is running at http://localhost:${port}`);
});