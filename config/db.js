//
const mongoose = require('mongoose');

//DB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;


// const URI = `mongodb://localhost:27017/recipesapp`;

// (() => {
//     mongoose.connect(URI).then((result) => {
//         if(result){
//             console.log("Mongodb connection succusfull")
//         }
//     }).catch((error)=>{
//             console.log("Mongodb connection unsuccusfull", error)
//     })
// })();
