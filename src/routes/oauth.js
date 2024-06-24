const Router = require("express").Router();

const Controller = require("../controllers/oauth");



Router.post("/login", Controller.Login);
// Router.get("/logout", Controller.logout)

module.exports = {
  Router
};
