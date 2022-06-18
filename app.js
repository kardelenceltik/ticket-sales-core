require("dotenv/config")
const express=require("express")
const bodyParser=require("body-parser")
const app=express()
const mongoose=require("mongoose")
const activityRoute = require("./routers/activity")
const chairRoute=require("./routers/chair")

app.use(bodyParser.json())


app.use("/activity",activityRoute)
app.use("/chair",chairRoute)


mongoose.connect(
    process.env.DB_CONNECT,
     {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected db");
  }
)

app.listen(7070)