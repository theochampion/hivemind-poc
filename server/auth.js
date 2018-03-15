const express = require("express");
const passport = require("passport");
require("./passportStrat");

const router = express.Router();

router.get("/bite", (req, res) => {
  res.json({ bite: "couille" });
});

router.get("/logout", (req, res) => {
  if (req.user) {
    console.log(req.user.username + " logged out");
    req.logout();
  }
  res.redirect("/login");
});

router.get("/facebook", passport.authenticate("facebook"));
router.get(
  "/facebook/redirect",
  passport.authenticate("facebook"),
  (req, res) => {
    res.redirect("/");
  }
);

module.exports = router;