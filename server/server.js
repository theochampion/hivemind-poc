const compression = require("compression");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const auth = require("./auth");
const http = require("http");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8102;

const app = express()
  .use(compression())
  .use(morgan("tiny"))
  .use(bodyParser.json());

// STATIC FILES
app.use("/", express.static(path.join(__dirname, "/../dist")));
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, "/../dist/index.html")));
});

// MONGODB
mongoose.connect("mongodb://localhost:27017/hivemind", () => {
  console.log("connected to mongodb");
});

// AUTHENTICATION
app.use("/auth", auth);

const server = http.createServer(app);
server.listen(PORT);

console.log(`Server started at http://localhost:${PORT}`);
