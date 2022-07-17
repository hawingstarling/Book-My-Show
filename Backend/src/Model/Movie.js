const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require("shortid");
const Movies = new Schema(
  {
    poster_path: { type: String, default: "" },
    popularity: { type: String, require: true },
    original_title: { type: String },
    id: { type: String, require: true },
    title: { type: String },
    release_date: { type: String, require: true, default: "" },
    overview: { type: String, require: true, default: "" },
    genre_ids: { type: Array, default: [] },
    UpComming: { type: Boolean, default: false },
    page:{type:Number,default:0}
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Movies", Movies);
