const express = require("express");
const MovieController = require("../../Controller/MovieController");
const { VerifyAdmin } = require("../../MiddleWare/Admin");
const router = express.Router();

// [GET]
router.get("/search", MovieController.SearchVideo);
router.get("/all", MovieController.GetAllMovie);
router.get("/fetchLastest",VerifyAdmin, MovieController.GetLastTestUpdateToDB);
router.get("/fetchupcomming",VerifyAdmin,MovieController.GetUpCommingUpdateToDB)
router.get("/upcomming", MovieController.GetUpComming);
router.get("/nowplaying",MovieController.GetNowPlaying)
// [DELETE]
router.delete("/delete", VerifyAdmin, MovieController.DeleteVideo);

// [PUT]
router.put("/edit", VerifyAdmin, MovieController.EditInfoVideo);

// [POST]
router.post("/add", VerifyAdmin, MovieController.AddNewVideo);

module.exports = router;
