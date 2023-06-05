import express, { Express, Request, Response } from 'express';
const router = express.Router();

import {login,signup}  from '../Services/user.service';

const bodyParser = require('body-parser');
const jsonParse = bodyParser.json();

//Get
router.get('/', (req: Request, res: Response) => {
  console.log("in get user");
  res.send("get user!!!!");
});

//Post
router.post('/login', jsonParse, (req: Request, res: Response) => {
  console.log("in login node controller: ", req.body);
  const { username, password } = req.body;
  const resu = login(username, password);
  console.log("result :"+resu);
  res.send(resu);
});

//Post
router.post('/signup', jsonParse, (req: Request, res: Response) => {
  console.log("in signup node controller: ", req.body);
  const { username,email, password } = req.body;
  const resu = signup(username,email, password);
  console.log("result :"+resu);
  res.send(resu);
});

module.exports = router;
