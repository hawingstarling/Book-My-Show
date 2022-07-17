const jwt = require("jsonwebtoken");
const { ACCESS_SEC } = require("../util/Key/keys");
const { MSG } = require("../util/MessageToClient");

const VerifyAdmin = function (req, res, next) {
  const authorizationHeader = req.headers["authorization"];
  const token = authorizationHeader.split(" ")[1];
  if (!token) res.sendStatus(404);
  jwt.verify(token, ACCESS_SEC, (err, data) => {
    console.log(data,9)
    if (err) return res.sendStatus(403);
    if(data.isAdmin) next()
    else return res.status(404).json(MSG("You're not permission to do this",404))
  });
  //   next();
};

module.exports = { VerifyAdmin };
