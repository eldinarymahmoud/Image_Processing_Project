"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("./routes/logger"));
var app = (0, express_1.default)();
var port = 8000;
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});
app.use("/api", logger_1.default);
app.use("/", logger_1.default, function (req, res) {
    res.send("THIS IS THE MAIN PAGE");
});
exports.default = app;
