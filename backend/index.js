const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv").config();
const passport = require("passport");
require("./config/passportConfig")(passport);
const jwt = require("jsonwebtoken");
const cors = require("cors");
//const options = require("./controllers/householdController");
const User = require("./models/userModel");
const userRouter = require("./routes/userRouter");
const householdRouter = require("./routes/houseHoldRouter");
const sequelize = require("./config/db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/user", userRouter);
app.use("/household", householdRouter);

app.get("/create", async (req, res, next) => {
  try {
    await sequelize.sync({ force: true }).then(() => {
      console.log("Models syncronized");
      res.status(200).json({ message: "Database created" });
    });
  } catch (err) {
    next(err);
  }
});

// app.get("/", (req, res) => {
//   res.json(options);
// });

// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["email", "profile"] })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { session: false }),
//   (req, res) => {
//     res.redirect("/profile/");
//   }
// );
// app.get("/profile", (req, res) => {
//   console.log(req);
//   res.send("Welcome");
// });

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { session: false }),
//   (req, res) => {
//     jwt.sign(
//       { user: req.user },
//       "secretKey",
//       { expiresIn: "1h" },
//       (err, token) => {
//         if (err) {
//           return res.json({
//             token: null,
//           });
//         }
//         res.json({
//           token,
//         });
//       }
//     );
//   }
// );

module.exports = app;
