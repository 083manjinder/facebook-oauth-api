const express = require("express");
const routes = require("./routes");
const passport = require('passport')
// const cookieParser = require("cookie-parser");
require("./dbconnection");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use(passport.initialize());
// app.use(cookieParser());
// Start the server

routes(app);

app.listen(port, () => {
  console.log(`Server started on port ${port} `);
});
