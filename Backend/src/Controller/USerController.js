const User = require("../Model/User");
const { MSG } = require("../util/MessageToClient");

const UserController = {
  getAllUser: async function (req, res) {
    try {
      let { data } = await User.find();
      console.log(data,8)
      res.status(202).json(data);
    } catch (e) {
      console.log(e, "UserConller");
      res.status(404).json(MSG("Fail To Get All User", 404));
    }
  },
  getOneUserByID: async function (req, res) {},
  UpdateInfo_OneUserByID: async function (req, res) {},
  Delete_OneUserByID: async function (req, res) {},
  Search_User: async function (req, res) {},
};

module.exports = UserController;
