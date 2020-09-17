import express from "express";
import path from "path"

const app = express();

app.use("/public", express.static(path.join(__dirname + "/../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
});

app.listen(3000, () => console.log("App listening on 3000"))