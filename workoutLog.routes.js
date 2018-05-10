const router = require("express").Router();
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

module.exports = router;

router.post("/", (req, res) => {
  return MongoClient.connect("mongodb://localhost:27017/", (err, db) => {
    if (err) throw err;
    db = db.db("workoutLog");
    db
      .collection("monday")
      .insertOne(req.body)
      .then(data => res.status(200).send(data.insertedId.toString()));
    db.close();
  });
});

router.get("/", (req, res) => {
  return MongoClient.connect("mongodb://localhost:27017/", (err, db) => {
    if (err) throw err;
    db = db.db("workoutLog");
    db
      .collection("monday")
      .find()
      .toArray()
      .then(data => res.status(200).send(data));
    db.close();
  });
});

router.get("/:id", (req, res) => {
  return MongoClient.connect("mongodb://localhost:27017/", (err, db) => {
    if (err) throw err;
    db = db.db("workoutLog");
    db
      .collection("monday")
      .findOne({ "_id": ObjectId(req.params.id) })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => console.log(err));
    db.close();
  });
});

router.put("/:id", (req, res) => {
  return MongoClient.connect("mongodb://localhost:27017/", (err, db) => {
    if (err) throw err;
    db = db.db("workoutLog");
    db
      .collection("monday")
      .replaceOne({ "_id": ObjectId(req.params.id)}, req.body)
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => console.log(err));
    db.close();
  });
});

router.delete("/:id", (req, res) => {
  return MongoClient.connect("mongodb://localhost:27017/", (err, db) => {
    if (err) throw err;
    db = db.db("workoutLog");
    db
      .collection("monday")
      .deleteOne({ "_id": ObjectId(req.params.id)})
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => console.log(err));
    db.close();
  });
});
