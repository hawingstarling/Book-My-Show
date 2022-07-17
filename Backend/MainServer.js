const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const MainRoutes = require("./src/Routes/MainServerRoutes");
const {
  MainRun,
  ConvertMovie_NowPlayingByPage,
} = require("./src/DevAPI/convert");
const { connect } = require("./src/Config/MongoConfig");
connect();
MainRoutes(app);
// ConvertMovie_NowPlayingByPage(1)
// MainRun() 
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
