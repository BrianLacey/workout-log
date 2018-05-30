const workoutLogServices = require("../services/workoutLog.services");

module.exports = {
  create: create,
  readAll: readAll,
  readById: readById,
  update: update,
  del: del
};

function create(req, res) {
  workoutLogServices
    .create(req.body)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));
}

function readAll(req, res) {
  workoutLogServices
    .readAll()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));
}

function readById(req, res) {
  workoutLogServices
    .readById(req.params.id)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));
}

function update(req, res) {
  delete req.body._id;
  workoutLogServices
    .update(req.params.id, req.body)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));
}

function del(req, res) {
  workoutLogServices
    .del(req.params.id)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));
}
