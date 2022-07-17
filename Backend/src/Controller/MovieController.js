const {
  ConvertMovie_NowPlayingByPage,
  ConvertMovie_UpCommingByPage,
} = require("../DevAPI/convert");
const { VerifyAdmin } = require("../MiddleWare/Admin");
const Movie = require("../Model/Movie");
const { MSG } = require("../util/MessageToClient");

const MovieController = {
  // [GET]
  GetAllMovie: async function (req, res) {
    try {
      let data = await Movie.find();
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
    const TotalPage = parseInt(req.query.page ? req.query.page : 1);
    try {
      await Movie.deleteMany({});
      await ConvertMovie_NowPlayingByPage(TotalPage);
      res.status(200).json(MSG("Update Successfully", 200));
    } catch (e) {
      res.status(404).json(MSG("Fail To Fetching Lastest ", 404));
    }
  },
  GetUpCommingUpdateToDB: async function (req, res) {
    const TotalPage = parseInt(req.query.page ? req.query.page : 1);
    try {
      await Movie.deleteMany({UpComming:true});
      await ConvertMovie_UpCommingByPage(TotalPage);
      res.status(200).json(MSG("Update Successfully", 200));
    } catch (e) {
      res.status(404).json(MSG("Fail To Fetching Lastest ", 404));
    }
  },
  GetNowPlaying: async function (req, res) {
    try {
      let data = await Movie.find({ UpComming: false });
      res.status(200).json(MSG("Successfully", 200, data));
    } catch (e) {
      console.log(e);
      res.status(200).json(MSG("Fetching data error", 404));
    }
  },
  GetUpComming: async function (req, res) {
    try {
      let data = await Movie.find({ UpComming: true });
      res.status(200).json(MSG("Successfully", 200, data));
    } catch (e) {
      console.log(e);
      res.status(200).json(MSG("Fetching data error", 404));
    }
  },
  AddNewVideo: async function (req, res) {},
  EditInfoVideo: async function (req, res) {},
  DeleteVideo: async function (req, res) {},
  SearchVideo: async function (req, res) {},
};
module.exports = MovieController;
