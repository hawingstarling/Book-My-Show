const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require("shortid");
const User = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, default: false },
    RankUser: { type: String, default: "normal" },
    accessToken: { type: Array, require: true, default: [] },
    refreshToken: { type: Array, require: true, default: [] },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", User);
