import express, { Express, Request, Response } from 'express';
const Users = require('./Controllers/user.controller');
const usernameValidation = require('./Middlewares/user.middleware');
const cors = require('cors')

const app: Express = express();
//app.options('*', cors()); // preflight OPTIONS; put before other routes
const port = 8000;

console.log("hi index node")


app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('server is up');
});

app.use('/user',Users);

app.listen(port, () => {
  console.log(`⚡️🤩[server]: Server is running at http://localhost:${port}`);
});