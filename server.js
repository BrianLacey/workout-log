const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./workoutLog.routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/", router);

// app.post("/", (req, res)=> res.status(200).send("I post!"));
// app.get("/", (req, res)=> res.status(200).send("I get!"));
// // app.get("/:id", (req, res)=> res.status(200).send("I get by id!"));
// app.put("/", (req, res)=> res.status(200).send("I put!"));
// app.delete("/", (req, res)=> res.status(200).send("I delete!"));

app.listen(3000);
