import express from "express";
import path from "path";
import getViews from "../routes/render";
import postCards from "../routes/cards";
import getData from "../routes/data";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

//config
dotenv.config();

//mount app
const app = express();

//database
const URI = process.env.MONGO_URI || "";
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database ready!"))
  .catch((err) => console.error(err));

//mount middleware
app.use(bodyParser.urlencoded({ extended: true }));

//serve static assets
app.use("/public", express.static(path.join(__dirname + "/../public")));
app.use("/assets", express.static(path.join(__dirname + "/../assets")));

//routes
app.use(getViews);
app.use(postCards);
app.use(getData);

//server listen
app.listen(3000, () => console.log("App listening on 3000"));
