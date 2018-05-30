const { MongoClient, ObjectId } = require("mongodb");

module.exports = {
  create: create,
  readAll: readAll,
  readById: readById,
  update: update,
  del: del
};

function create(body) {
  return MongoClient.connect(process.env.MONGODB_URL)
    .then(db => {
      return db
        .db("workoutLog")
        .collection("exercises")
        .insertOne(body);
    })
    .then(data => {
      data.insertedId.toString();
    })
    .catch(err => err);
}

function readAll() {
  return MongoClient.connect(process.env.MONGODB_URL)
    .then(db => {
      return db
        .db("workoutLog")
        .collection("exercises")
        .find()
        .toArray();
    })
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        data[i]._id = data[i]._id.toString();
      }
      return data;
    })
    .catch(err => err);
}

function readById(id) {
  return MongoClient.connect(process.env.MONGODB_URL)
    .then(db => {
      return db
        .db("workoutLog")
        .collection("exercises")
        .findOne({ _id: ObjectId(id) });
    })
    .then(data => {
      data._id = data._id.toString();
      return data;
    })
    .catch(err => err);
}
function update(id, body) {
  return MongoClient.connect(process.env.MONGODB_URL)
    .then(db => {
      return db
        .db("workoutLog")
        .collection("exercises")
        .replaceOne({ _id: ObjectId(id) }, body);
    })
    .then(data => {
      data._id = data._id.toString();
      return data;
    })
    .catch(err => err);
}
function del(id) {
  return MongoClient.connect(process.env.MONGODB_URL)
    .then(db => {
      return db
        .db("workoutLog")
        .collection("exercises")
        .deleteOne({ _id: ObjectId(id) });
    })
    .then(data => res.status(200).send(data))
    .catch(err => err);
}
