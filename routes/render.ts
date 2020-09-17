import { Router } from "express";
import path from "path";

const router = Router();

router.get("/", (_, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
});

router.get("/create", (_, res) => {
  res.sendFile(path.join(__dirname + "/../views/create.html"));
});

router.get("/view", (_, res) => {
  res.sendFile(path.join(__dirname + "/../views/card.html"));
});

router.get("/update", (_, res) => {
  res.sendFile(path.join(__dirname + "/../views/update.html"));
});

router.get("/search", (_, res) => {
  res.sendFile(path.join(__dirname + "/../views/search.html"));
});

export default router;
