import express from 'express';
import { addFoodOptionCtrl, addNutValuesCtrl, getNutritionByIdCtrl } from '../Controllers/nutrition.controller';
import { addArticleCtrl, getArticlesCtrl } from '../Controllers/admin.controller';

const router = express.Router();
const bodyParser = require('body-parser');
const jsonParse = bodyParser.json();

// router.get('/:id',getNutritionByIdCtrl);
// router.put('/addNutValues',jsonParse,addNutValuesCtrl)
router.post('/addArticle',jsonParse,addArticleCtrl)
 router.get('/getAllArticles',getArticlesCtrl);

module.exports = router;
