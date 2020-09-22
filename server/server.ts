import express from "express";
import path from "path";
import getViews from "../routes/render";
import postCards from "../routes/cards";
import getData from "../routes/data";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet"

//config
dotenv.config();
const URI = process.env.MONGO_URI || "";
const PORT = process.env.PORT || "3000";

//mount app
const app = express();

//database
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
app.use(
  helmet({
    expectCt: false,
    hsts: false,
    contentSecurityPolicy: {
      directives: {
        "default-src": ["'self'"],
        "img-src": "*",
        "script-src": ["'self'", "'unsafe-inline'"],
        "object-src": ["'none'"],
        "style-src-elem": ["'self'", "'unsafe-inline'"],
        "font-src": ["'self'", "fonts.googleapis.com", "fonts.gstatic.com"],
      },
    },
  })
);

//serve static assets
app.use("/public", express.static(path.join(__dirname + "/../public")));
app.use("/assets", express.static(path.join(__dirname + "/../assets")));

//routes
app.use(getViews);
app.use(postCards);
app.use(getData);

//server listen
app.listen(PORT, () => console.log("App listening on " + PORT));
