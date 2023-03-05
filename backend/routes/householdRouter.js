const express = require("express");
const {
  createHousehold,
  updateHousehold,
  filteredHouseholds,
} = require("../controllers/householdController");
const householdRouter = express.Router();

householdRouter.post("/addHousehold/:UserId", createHousehold);
// householdRouter.put("/update/:id", updateHousehold);
householdRouter.get("/allHouseholds", filteredHouseholds);

module.exports = householdRouter;
