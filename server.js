const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./app/workoutLog.routes");
const MongoClient = require("mongodb").MongoClient;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/", router);

MongoClient.connect(process.env.MONGODB_URL, (err, db) => {
  if (err) throw err;
  console.log("Magic happens on port 27017!");
  db.close();
});

app.listen(4000);
