import { Router } from "express";
import path from "path";
import { displayPartsToString } from "typescript";
import { UserCard } from "../interfaces/user";
import bcrypt from "bcrypt";
import xss from "xss";

const router = Router();

router.post("/create", async (req, res) => {
  const data = await UserCard.findOne({ username: req.body.username });
  if (data) {
    return res.send("Username Taken!");
  }
  const newCard = new UserCard({
    username: req.body.username,
    facebook: req.body.facebook,
    bio: xss(req.body.bio),
    avatar: req.body.avatar,
    twitter: req.body.twitter,
    linkedin: req.body.linkedin,
    github: req.body.github,
    tumblr: req.body.tumblr,
    portfolio: req.body.portfolio,
  });
  newCard.password = await bcrypt.hash(req.body.password, 10);
  await newCard.save();
  res.redirect("/view?user=" + req.body.username);
});

router.post("/update", async (req, res) => {
  const data = await UserCard.findOne({ username: req.body.cUsername });
  if (!data) return res.send("Invalid Username");
  await bcrypt.compare(
    req.body.cPassword,
    data.password,
    async (err, result) => {
      if (result) {
        if (req.body.nUsername) data.username = req.body.nUsername;
        if (req.body.nPassword)
          data.password = await bcrypt.hash(req.body.nPassword, 10);
        data.bio = xss(req.body.bio);
        data.avatar = req.body.avatar;
        data.facebook = req.body.facebook;
        data.twitter = req.body.twitter;
        data.linkedin = req.body.linkedin;
        data.github = req.body.github;
        data.tumblr = req.body.tumblr;
        data.portfolio = req.body.portfolio;
        await data.save();
        res.redirect("/view?user=" + data.username);
      }
      if (err || !result) {
        res.send("Invalid password");
      }
    }
  );
});

export default router;
