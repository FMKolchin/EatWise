import mongoose from "mongoose";

class Article {
    _id:string = "";
    title: string ="";
    content: string ="";
    author: string ="";
    image: string ="";
}

const articleSchema = new mongoose.Schema<Article>({
  _id:{ type: String, required: true },
  title: { type: String, required: true },
  content:{ type: String, required: true },
  author:{ type: String, required: true },
  image:{ type: String},


});

const ArticleModel = mongoose.model<Article>("Articles", articleSchema);

export { Article, ArticleModel };