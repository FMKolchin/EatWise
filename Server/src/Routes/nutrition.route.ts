import express from 'express';
import { addNutValuesCtrl, getNutritionByIdCtrl } from '../Controllers/nutrition.controller';

const router = express.Router();
const bodyParser = require('body-parser');
const jsonParse = bodyParser.json();

router.get('/:id',getNutritionByIdCtrl);
router.put('/addNutValues',bodyParser,addNutValuesCtrl)


module.exports = router;
