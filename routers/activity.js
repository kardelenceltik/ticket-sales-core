const express = require("express");
const router = express.Router();
const activity = require("../models/activity");

router.get("/get", async (req, res) => {
  try {
    const activities = await activity.find({ rowStatus: 1 });
    res.json(activities);
  } catch (error) {
    res.json(error);
  }
});
router.get("/get-activity-by-id", async (req, res) => {
  try {
    const activityId = req.query.activityId;

    const faundActivity = await activity.findOne({ _id: activityId });

    res.json(faundActivity);
  } catch (error) {
    res.json(error);
  }
});

router.get("/get-activity-by-like", async (req, res) => {
  try {
    const likeValue = req.query.likeValue;
    const faundActivity = await activity.find({
      name: { $regex: ".*" + likeValue + ".*" },
    });
    res.json(faundActivity);
  } catch (error) {
    res.json(error);
  }
});

router.get("/get-old-activity", async (req, res) => {
  try {
    const faundActivity = await activity.find({ rowStatus: 4 });
    res.json(faundActivity);
  } catch (error) {
    res.json(error);
  }
});
router.get("/get-by-activityType", async (req, res) => {
  const activityType = req.query.activityType;
  const foundActivity = await activity.find({ activityType: activityType });
  res.json(foundActivity);
});

router.get("/get-by-row-status", async (req, res) => {
  try {
    const activities = await activity.find({ rowStatus: 1 });
    res.json(activities);
  } catch (error) {
    res.json(error);
  }
});

router.post("/create", async (req, res) => {
  try {
    const createdActivity = await activity.create(req.body);
    res.json(createdActivity);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
