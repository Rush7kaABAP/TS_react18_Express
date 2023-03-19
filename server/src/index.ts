import express from "express";
const api = require("./api");
import bodyParser from "body-parser";
const port = 3001;

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(bodyParser.json());
app.use("/api", api);

app.listen(port, "localhost", ():void => {
  console.log("Listening at http://localhost:" + port);
});

console.log("started");
