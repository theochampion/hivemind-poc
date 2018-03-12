const express = require("express");

const router = express.Router();

router.get("/facebook", (req, res) => {
  res.json({ status: "yup" });
});

module.exports = router;