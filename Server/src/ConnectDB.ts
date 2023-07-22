const mongoose = require('mongoose');

mongoose.set('strictQuery',false);
const mongodb = "mongodb://127.0.0.1:27017/Nutrition"

connect().catch((err)=>console.log(err));

const db  = mongoose.connection;
db.on('error',(err: any)=>console.log(err));
db.once('open',()=>console.log('mongo connected🪢'));


async function connect(){
    await mongoose.connect(mongodb);
}

function closeDBConnection() {
    mongoose.connection.close(() => {
    //   process.exit(0); // Optional: Exit the process after closing the connection
    });
  }
  

module.exports = db;

