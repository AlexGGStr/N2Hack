const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const passport = require("passport");
require("./config/passportConfig")(passport);
const jwt = require("jsonwebtoken");
const cors = require("cors");

app.use(cors());

app.get(
  "/auth/google", passport.authenticate('google', {
    scope: [ 'email' ]
  }));

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    res.redirect("/profile/");
  }
);
app.get("/profile", (req, res) => {
  console.log(req);
  res.send("Welcome");
});

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    jwt.sign(
      { user: req.user },
      "secretKey",
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          return res.json({
            token: null,
          });
        }
        res.json({
          token,
        });
      }
    );
  }
);

module.exports = app;
