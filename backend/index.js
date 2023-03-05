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
const { spawn } = require("child_process");
let { PythonShell } = require("python-shell");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/user", userRouter);
app.use("/household", householdRouter);
// app.use("/piton", async (req, res) => {
//   let options = {
//     pythonPath: "python3",
//     args: ["school"],
//   };

//   await PythonShell.run("./config/script.py", options, function (err, results) {
//     console.log(results);
//     console.log("Done");
//   });
// });

app.get("/pythonScript", (req, res) => {
  // Arguments to pass to the Python script
  let argList = [];

  if (req.query.school == "true") {
    argList.push("school");
  }
  if (req.query.church == "true") {
    argList.push("church");
  }
  if (req.query.hospital == "true") {
    argList.push("hospital");
  }
  if (req.query.restaurant == "true") {
    argList.push("restaurant");
  }
  if (req.query.bank == "true") {
    argList.push("bank");
  }
  //const pythonArgs = ["arg1", "arg2", "arg3"];

  // Spawn a new process to run the Python script
  const pythonProcess = spawn("python3", ["./config/script.py", ...argList]);

  // Listen for output from the Python script
  pythonProcess.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  // Listen for errors from the Python script
  pythonProcess.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  // Listen for the Python script to exit
  pythonProcess.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });

  // Send a response to the client

  const fs = require("fs");

  fs.readFile("./config/output.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    res.send(data);
  });
});

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
