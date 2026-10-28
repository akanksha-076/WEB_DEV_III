const mongoose = require('mongoose');
async function connectDB(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/clg');
        console.log("MongoDB connected successfully");
    }
    catch(err){
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
}
connectDB();