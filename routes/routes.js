const express = require("express");
const homeRouter = require("./home.route");

const routes = express.Router();
routes.use("/home", homeRouter);

module.exports = routes;
