const { ConvertMovie_NowPlayingByPage } = require("../DevAPI/convert");
const Movie = require("../Model/Movie");
const { MSG } = require("../util/MessageToClient");

const MovieController = {
  // [GET]
  GetAllMovie: async function (req, res) {
    try {
      let { data } = await Movie.find();
      console.log(data);
      res.status(200).json({
        page: 1,
        TotalPage: 10,
        data,
      });
    } catch (e) {
      console.log(e, "Movie Controller 15");
    }
  },
  GetLastTestUpdateToDB: async function (req, res) {
    // console.log(req.query.page);

    const TotalPage = parseInt(req.query.page ? req.query.page : 1);
    try {
      await Movie.deleteMany({});
      await ConvertMovie_NowPlayingByPage(TotalPage);
      res.status(200).json(MSG("Update Successfully", 200));
    } catch (e) {
      res.status(404).json(MSG("Fail To Fetching Lastest ", 404));
    }
  },
};
module.exports = MovieController;
