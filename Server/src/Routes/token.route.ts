import express from 'express';
import { getUserFromToken, validateJwtCtrl } from '../Controllers/token.controller';

const router = express.Router();
const bodyParser = require('body-parser');
const jsonParse = bodyParser.json();


router.post('/validate-jwt',jsonParse,validateJwtCtrl);
router.post('/user-from-token',jsonParse,getUserFromToken);

module.exports = router;
