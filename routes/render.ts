import { Router } from "express";
import path from "path";

const router = Router()

router.get("/", (_, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
});

router.get("/create", (_, res) => {
  res.sendFile(path.join(__dirname + "/../views/create.html"));
});

router.get("/view", (_, res) => {
    res.sendFile(path.join(__dirname + "/../views/card.html"))
})

export default router