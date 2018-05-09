const router = require("express").Router();

module.exports = router;

router.post("/", (req, res) => res.status(200).send("I post!"));
router.get("/", (req, res)=> res.status(200).send("I get!"));
// router.get("/:id", (req, res)=> res.status(200).send("I get by id!"));
router.put("/", (req, res) => res.status(200).send("I put!"));
router.delete("/", (req, res) => res.status(200).send("I delete!"));