const mongoose = require('mongoose');

mongoose.set('strictQuery',false);
const mongodb = "mongodb://localhost:27017/Nutrition"

const connect = async ()=>{
    await mongoose.connect(mongodb);
}