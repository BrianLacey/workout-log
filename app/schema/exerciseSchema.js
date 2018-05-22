const Joi = require("joi");

module.exports = Joi.object({
  name: Joi.string().required(),
  sets: Joi.string()
    .regex(/\d*/)
    .required(),
  reps: Joi.string()
    .regex(/\d*/)
    .required(),
  weight: Joi.string()
    .regex(/^\d*$|^\d*\.\d$/)
    .required(),
  weekDay: Joi.string().required()
});
