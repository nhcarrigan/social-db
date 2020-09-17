import { Router } from "express";
import path from "path";
import { displayPartsToString } from "typescript";
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

router.post("/update", async (req, res) => {
  const data = await UserCard.findOne({ username: req.body.cUsername });
  if (!data) return res.send("Invalid Username");
  if (data.password !== req.body.cPassword) return res.send("Invalid password");
  if (req.body.nUsername) data.username = req.body.nUsername;
  if (req.body.nPassword) data.password = req.body.nPassword;
  data.facebook = req.body.facebook;
  data.twitter = req.body.twitter;
  data.linkedin = req.body.linkedin;
  data.github = req.body.github;
  data.tumblr = req.body.tumblr;
  data.portfolio = req.body.portfolio;
  await data.save();
  res.redirect("/view?user=" + data.username);
});

export default router;
