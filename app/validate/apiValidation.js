const Joi = require("joi");
const exerciseSchema = require("../schema/exerciseSchema");

module.exports = (req, res, next) => {
    Joi.validate(req.body, exerciseSchema, (err, value) => {
      if (err) {
        res.status(400).send(err);
      } else {
        next();
      }
    });
  };
