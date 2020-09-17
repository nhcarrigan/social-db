import { Router } from "express";
import path from "path";
import { UserCard, UserCardInt } from "../interfaces/user";

const router = Router();

router.get("/data", async (req, res) => {
  try {
    const data = await UserCard.findOne({ username: req.query.user as string })
      .select("-password")
      .select("-_id");
    if (!data) return res.send({ username: "USER NOT FOUND" });
    res.send(data);
  } catch (err) {
    console.error(err);
  }
});

export default router;
