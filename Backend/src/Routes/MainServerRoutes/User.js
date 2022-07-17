const express = require("express");
const UserController = require("../../Controller/USerController");
const { VerifyAdmin } = require("../../MiddleWare/Admin");
const router = express.Router();

router.get("/alluser", VerifyAdmin, UserController.getAllUser);
router.get("/user:id", VerifyAdmin, UserController.getOneUserByID);
router.get("/search_user", VerifyAdmin, UserController.Search_User);

router.put("/update:id", UserController.UpdateInfo_OneUserByID);

router.delete("/delete:id", VerifyAdmin, UserController.Delete_OneUserByID);

module.exports = router;
