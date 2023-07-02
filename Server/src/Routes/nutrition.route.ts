import express from 'express';
import { getNutritionByIdCtrl } from '../Controllers/nutrition.controller';

const router = express.Router();
const bodyParser = require('body-parser');
const jsonParse = bodyParser.json();

router.get('/:id',getNutritionByIdCtrl);


module.exports = router;
