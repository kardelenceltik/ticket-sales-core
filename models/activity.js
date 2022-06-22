const mongoose = require("mongoose");
const activitySchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  actors: {
    type: Array,
    require: true,
  },
  photo: {
    type: Array,
    require: true,
  },

  address: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },

  rowStatus: {
    type: Number,
    require: true,
  },
  locationHtml: {
    type: String,
    require: true,
  },

  activityType: {
    type: String,
    require: true,
  },
  startDate: {
    type: Date,
    require: true,
  },
});
module.exports = mongoose.model("activity", activitySchema);
