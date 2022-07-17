const movieRoute = require("./movie")
const MainRoutes=function(app){
    app.use("/movie",movieRoute)
    app.use("/users",(req,res)=>{
        res.send("User Route")
    })
}
module.exports = MainRoutes;