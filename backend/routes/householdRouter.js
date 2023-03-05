const express = require("express");
const {
  createHousehold,
  updateHousehold,
  filteredHouseholds,
  myHouseholds,
} = require("../controllers/householdController");
const householdRouter = express.Router();

householdRouter.post("/addHousehold/:UserId", createHousehold);
// householdRouter.put("/update/:id", updateHousehold);
householdRouter.get("/allHouseholds", filteredHouseholds);
householdRouter.get("/myHouseholds/:id", myHouseholds);

module.exports = householdRouter;
