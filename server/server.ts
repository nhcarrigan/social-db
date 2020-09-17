import express from "express";
import path from "path"
import getViews from "../routes/render";

const app = express();

app.use("/public", express.static(path.join(__dirname + "/../public")));
app.use("/assets", express.static(path.join(__dirname + "/../assets")));
app.use(getViews)
app.listen(3000, () => console.log("App listening on 3000"))