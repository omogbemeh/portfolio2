const express = require("express");
const routes = require("./routes/routes");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", "views");

app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.redirect("/home"));
app.use(routes);

module.exports = app;
