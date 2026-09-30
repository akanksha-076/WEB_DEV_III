// const express = require('express');
// const app = express();
// const port=3000;
// app.use(express.json());

// const tourRouter=require('./router/tourRouter.js')

// app.use('/tours',tourRouter);

// app.listen(port, () => {
//     console.log(`sever runnig on port ${port}`)
// });
// ========================================================

// const express = require('express');
// const app = express();
// const tourRouter = require('./router/tourRouter');

// app.use(express.json());

// app.use('/tours', tourRouter);

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });

import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
const password = process.env.password;

const uri = "mongodb://a31695132_db_user:password@ac-b8xba4p-shard-00-00.hpq96sk.mongodb.net:27017,ac-b8xba4p-shard-00-01.hpq96sk.mongodb.net:27017,ac-b8xba4p-shard-00-02.hpq96sk.mongodb.net:27017/?ssl=true&replicaSet=atlas-veqzzb-shard-0&authSource=admin&appName=Cluster0";

const client = new MongoClient(uri);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.error("Connection error:", err);
  }
}

connectToMongoDB();