const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./app/workoutLog.routes");
const MongoClient = require("mongodb").MongoClient;

app.use(express.json());
app.use(express.urlencoded());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.APP_URL);
  res.header("Access-Control-Allow-Headers","Content-Type,application/json")
  next();
});
app.use("/", router);

MongoClient.connect(process.env.MONGODB_URL, (err, db) => {
  if (err) throw err;
  console.log("Magic happens on port 27017!");
  db.close();
});

app.listen(4000);
