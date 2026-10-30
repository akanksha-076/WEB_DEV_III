const mongoose = require('mongoose');

async function connectDB() {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/clg';
  await mongoose.connect(mongoUri);
  console.log('MongoDB connected successfully');
}

module.exports = connectDB;