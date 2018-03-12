const compression = require("compression");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
const path = require("path");
const auth = require("./auth");
const http = require("http")

const PORT = process.env.PORT || 8102;

const app = express()
  .use(compression())
//   .use(cookieParser())
  .use(morgan("tiny"))
  .use(bodyParser.json());

// AUTHENTICATION
app.use("/auth", auth);

// UI
app.use("/", express.static(path.join(__dirname, "/../dist")));
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, "/../dist/index.html")));
});

const server = http.createServer(app);
server.listen(PORT);
// notifier.listen(server);

console.log(`Server started at http://localhost:${PORT}`);
