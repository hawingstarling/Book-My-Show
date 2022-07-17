const jwt = require("jsonwebtoken");
const User = require("../Model/User");
const CryptoJS = require("crypto-js");

const { ACCESS_SEC, HASH_SEC, TIME_EXPIRED, REFRESH_SEC } = require("../util/Key/keys");
const Keys = require("../util/Key/keys");
const LoginController = {
  Login: async function (req, res) {
    const dataFormClient = req.body;
    console.log(dataFormClient);
    try {
      const UserFromDB = await User.findOne({
        email: dataFormClient.email,
      });
      if (UserFromDB) {
        let bytes = CryptoJS.AES.decrypt(UserFromDB.password, HASH_SEC);
        let decryptedEmail = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        if (decryptedEmail == dataFormClient.password) {
          const { password,...others } = UserFromDB._doc;
          const accessToken = jwt.sign(others, Keys.ACCESS_SEC, {
            expiresIn: TIME_EXPIRED,
          });
          const RefreshToken = jwt.sign(others,REFRESH_SEC)
          others.refreshToken.push(RefreshToken);
          others.accessToken.push(accessToken);
          await User.findByIdAndUpdate(others._id,others);
          console.log("Coas");
          res.json({
            msg: "Success",
            statuse: 200,
            data: others,
          });
        } else {
          res.json({
            msg: "Incorrect password",
            data: "",
            status: 404,
          });
        }
      } else {
        res.json({
          msg: "This email is not registed by you \n Please check your email or Create a new account",
          data: "",
          status: 404,
        });
        // console.log("no email");
      }
    } catch (e) {
      console.log(e, "Login Controller");
      res.status(404).json({
        msg: "Error",
        data: "",
        status: 404,
      });
    }
  },
  RefreshToken: async function (req, res) {},
};

module.exports = LoginController;
