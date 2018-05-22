const Joi = require("joi");
const exerciseSchema = require("../schema/exerciseSchema");

module.exports = (req, res, next) => {
    // debugger;
    Joi.validate(req.body, exerciseSchema, (err, value) => {
      // debugger;
      if (err) {
        res.status(400).send(err);
      } else {
        next();
      }
    });
  };
