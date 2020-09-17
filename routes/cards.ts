import { Router } from "express";
import path from "path";
import { UserCard } from "../interfaces/user";

const router = Router();

router.post("/create", async (req, res) => {
  console.log(req.body);
  const data = await UserCard.findOne({ username: req.body.username });
  if (data) {
    return res.send("Username Taken!");
  }
  const newCard = new UserCard({
    username: req.body.username,
    password: req.body.password,
    facebook: req.body.facebook,
    twitter: req.body.twitter,
    linkedin: req.body.linkedin,
    github: req.body.github,
    tumblr: req.body.tumblr,
    portfolio: req.body.portfolio,
  });
  await newCard.save();
  res.redirect("/view?user=" + req.body.username);
});

export default router;
