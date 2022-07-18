const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const MainRoutes = require("./src/Routes/MainServerRoutes");
const {
  MainRun,
  ConvertMovie_NowPlayingByPage,
} = require("./src/DevAPI/convert");
const { connect } = require("./src/Config/MongoConfig");
connect();

app.use(cors());
MainRoutes(app);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
