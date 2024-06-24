const express = require("express");
// const user = require("./user");
// const role = require("./role");
const oauth = require("./oauth");
// const farm = require("./farm");
// const authValidate = require("../controllers/auth");

module.exports = function (app) {
  // Initializing route groups
  const apiRoutes = express.Router();
    


  apiRoutes.use("/auth", oauth.Router);



  app.use("/api", apiRoutes);
  apiRoutes.get("/", function (req, res, next) {
    res.json({
      api: "Facebook Oauth",
    });
  });
};
