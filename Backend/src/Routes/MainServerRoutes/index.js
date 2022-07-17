const movieRoute = require("./movie")
const UserRoute = require("./User")
const MainRoutes=function(app){
    app.use("/movie",movieRoute)
    app.use("/users",UserRoute)
}
module.exports = MainRoutes;