require("dotenv/config");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const activityRoute = require("./routers/activity");
const chairRoute = require("./routers/chair");
const activityTypeRoute = require("./routers/activityType");

var cors = require("cors");

// use it before all route definitions
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());

app.use("/activity", activityRoute);
app.use("/chair", chairRoute);
app.use("/activityType", activityTypeRoute);

mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected db");
  }
);

app.listen(7070);
