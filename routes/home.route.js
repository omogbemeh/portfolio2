const express = require("express");

const homeRouter = express.Router();

homeRouter.get("/", (req, res, next) => {
  res.render("home", { title: "Praise O" });
});

module.exports = homeRouter;
