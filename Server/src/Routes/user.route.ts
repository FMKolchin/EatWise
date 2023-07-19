import express from 'express';
import { changeDetailsCtrl, loginCtrl, savePersonalDetailsCtrl, signupCtrl, updateDaysCtrl } from '../Controllers/user.controller';

const router = express.Router();
const bodyParser = require('body-parser');
const jsonParse = bodyParser.json();

router.post('/login', jsonParse, loginCtrl);
router.post('/signup', jsonParse, signupCtrl);
router.post('/savePersonalDetails', jsonParse, savePersonalDetailsCtrl)
router.post('/updateDays',jsonParse, updateDaysCtrl);
router.post('/changeDetails', jsonParse, changeDetailsCtrl);
module.exports = router;
