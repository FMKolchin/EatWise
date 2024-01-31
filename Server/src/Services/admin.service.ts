//don't delete, needed for DB connection
const connectDB = require('../ConnectDB');
import { Article,ArticleModel } from "../Models/article.model";
const objectId = require("mongodb").ObjectId;


export const addArticle = async (title:string,content: string, author: string, image: string):Promise<void> =>{
    console.log("in addArticle controller")
    const _id = new objectId();
 await createArticle({ _id: _id, title: title, content: content, author: author,image:image })
  }
  const createArticle = async (article: any): Promise<Article> => {
    return await ArticleModel.create(article);
  }

  export const getArticles = async ():Promise<Article[]> =>{
    console.log("in getArticles controller")
    const articles: Article[] = await ArticleModel.find({ });
     return articles;
  }
