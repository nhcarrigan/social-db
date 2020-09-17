import { Router } from "express";
import path from "path";
import { UserCard, UserCardInt } from "../interfaces/user";

const router = Router();

router.get("/data", async (req, res) => {
  const data = await UserCard.findOne({username: req.query.user as string}).select("-password").select("-_id")
  res.send(data)
});

export default router;