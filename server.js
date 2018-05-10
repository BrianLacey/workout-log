const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./workoutLog.routes");
const MongoClient = require("mongodb").MongoClient;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/", router);

MongoClient.connect("mongodb://localhost:27017/workoutLog", (err, db) => {
  if (err) throw err;
  console.log("Magic happens on port 27017!");
  db.close();
});

app.listen(3000);
