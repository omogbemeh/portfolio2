const express = require("express");

const projectsRouter = express.Router();

projectsRouter.get("/", (req, res, next) => {
  res.render("projects", { title: "Projects" });
});

module.exports = projectsRouter;
