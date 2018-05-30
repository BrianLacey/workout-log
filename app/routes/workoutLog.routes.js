const router = require("express").Router();
const validate = require("../validate/apiValidation");
const workoutLogControllers = require("../controllers/workoutLog.controllers");

module.exports = router;

router.post("/", /* validate, */ workoutLogControllers.create);
router.get("/", workoutLogControllers.readAll);
router.get("/:id", workoutLogControllers.readById);
router.put("/:id", validate, workoutLogControllers.update);
router.delete("/:id", workoutLogControllers.del);
