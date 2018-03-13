const compression = require("compression");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const auth = require("./auth");
const http = require("http");
const cookieSession = require("cookie-session");
const passport = require("passport");
const mongoose = require("mongoose");

const keys = require("./keys");

const PORT = process.env.PORT || 8102;

const app = express()
  .use(compression())
  .use(morgan("dev"))
  .use(bodyParser.json());

// SESSIONS
app
  .use(
    cookieSession({
      maxAge: 24 * 60 * 60 * 30, // 30 days
      keys: [keys.session.cookieKey]
    })
  )
  .use(passport.initialize())
  .use(passport.session());

// MONGODB
mongoose.connect("mongodb://localhost:27017/hivemind", () => {
  console.log("connected to mongodb");
});

// AUTHENTICATION
app.use("/auth", auth);

const server = http.createServer(app);
server.listen(PORT);

console.log(`Server started at http://localhost:${PORT}`);