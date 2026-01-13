const myController = require("../Contollers");
const routes = require("express").Router();

routes.get("/ttech", myController.awesomeFunction);

module.exports = routes;