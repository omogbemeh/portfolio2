const express = require("express");

const blogRouter = express.Router();

blogRouter.get("/", (req, res, next) => {
  res.render("blog", { title: "Blog" });
});

module.exports = blogRouter;
