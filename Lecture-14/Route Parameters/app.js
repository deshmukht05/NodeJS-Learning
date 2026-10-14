import express from "express";
import { PORT } from "./env.js";

const app = express();

app.get("/profile/:username", (req, res) => {
  console.log(req.params);
  res.send(`<h1>Hi, my id is ${req.params.username}</h1>`);
});

app.get("/profile/:username/article/:slug", (req, res) => {
  console.log(req.params);
  const formatedSlug = req.params.slug.replace(/-/g, " ").toUpperCase();
  res.send(`<h1>Article "${formatedSlug}" by @${req.params.username} </h1>`);
});

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
