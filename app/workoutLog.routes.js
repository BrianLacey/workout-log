const router = require("express").Router();
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
// const validate = require("./validate/apiValidation");
const exerciseSchema = require("./schema/exerciseSchema");
const Joi = require("joi");

module.exports = router;

router.post(
  "/",
  (req, res, next) => {
    Joi.validate(req.body, exerciseSchema, (err, value) => {
      if (err) {
        res.status(400).send(err);
      } else {
        next();
      }
    });
  },
  (req, res) => {
    return MongoClient.connect(process.env.MONGODB_URL, (err, db) => {
      if (err) throw err;
      db = db.db("workoutLog");
      db
        .collection("exercises")
        .insertOne(req.body)
        .then(data => {
          res.status(200).send(data.insertedId.toString());
        });
      db.close();
    });
  }
);

router.get("/", (req, res) => {
  return MongoClient.connect(process.env.MONGODB_URL, (err, db) => {
    if (err) throw err;
    db = db.db("workoutLog");
    db
      .collection("exercises")
      .find()
      .toArray()
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          data[i]._id = data[i]._id.toString();
        }
        res.status(200).send(data);
      });
    db.close();
  });
});

router.get("/:id", (req, res) => {
  return MongoClient.connect(process.env.MONGODB_URL, (err, db) => {
    if (err) throw err;
    db = db.db("workoutLog");
    db
      .collection("exercises")
      .findOne({ _id: ObjectId(req.params.id) })
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
    db.close();
  });
});

router.put(
  "/:id",
  (req, res, next) => {
    Joi.validate(req.body, exerciseSchema, (err, value) => {
      if (err) {
        res.status(400).send(err);
      } else {
        next();
      }
    });
  },
  (req, res) => {
    delete req.body._id;
    return MongoClient.connect(process.env.MONGODB_URL, (err, db) => {
      if (err) throw err;
      db = db.db("workoutLog");
      db
        .collection("exercises")
        .replaceOne({ _id: ObjectId(req.params.id) }, req.body)
        .then(data => {
          res.status(200).send(data);
        })
        .catch(err => console.log(err));
      db.close();
    });
  }
);

router.delete("/:id", (req, res) => {
  return MongoClient.connect(process.env.MONGODB_URL, (err, db) => {
    if (err) throw err;
    db = db.db("workoutLog");
    db
      .collection("exercises")
      .deleteOne({ _id: ObjectId(req.params.id) })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => console.log(err));
    db.close();
  });
});
