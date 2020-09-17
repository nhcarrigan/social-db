"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
app.use("/public", express_1.default.static(path_1.default.join(__dirname + "/../public")));
app.get("/", function (req, res) {
    res.sendFile(path_1.default.join(__dirname + "/../views/index.html"));
});
app.listen(3000, function () { return console.log("App listening on 3000"); });
