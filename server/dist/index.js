"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api = require("./api");
const body_parser_1 = __importDefault(require("body-parser"));
const port = 3001;
const app = (0, express_1.default)();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
app.use(body_parser_1.default.json());
app.use("/api", api);
app.listen(port, "localhost", () => {
    console.log("Listening at http://localhost:" + port);
});
console.log("started");
