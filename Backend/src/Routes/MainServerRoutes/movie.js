const express = require("express");
const MovieController = require("../../Controller/MovieController");
const router = express.Router();

router.get("/all", MovieController.GetAllMovie);
router.get("/fetchLastest",MovieController.GetLastTestUpdateToDB)
module.exports = router;
