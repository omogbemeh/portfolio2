const express = require("express");

const blogRouter = require("./blog.route");
const homeRouter = require("./home.route");
const projectsRouter = require("./projects.route");

const routes = express.Router();

routes.use("/home", homeRouter);
routes.use("/blog", blogRouter);
routes.use("/projects", projectsRouter);

module.exports = routes;
