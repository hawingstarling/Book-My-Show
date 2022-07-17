const express = require("express");
const MovieController = require("../../Controller/MovieController");
const { VerifyAdmin } = require("../../MiddleWare/Admin");
const router = express.Router();

router.get("/all", MovieController.GetAllMovie);
router.get("/fetchLastest", VerifyAdmin, MovieController.GetLastTestUpdateToDB);
module.exports = router;
