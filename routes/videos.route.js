const express = require("express");
const router = express.Router();
const { Video } = require("../models/video.model");

router.route("/")
.get(async (req, res) => {
    try {
    const videos = await Video.find({});
  res.json({ success: true, data: videos })
  } catch (err) {
    res.status(500).json({ success: false, message: "unable to get videos", errorMessage: err.message })
  }
});

module.exports = router;
