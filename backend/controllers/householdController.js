const request = require("request");
const Household = require("../models/householdModel");
const User = require("../models/userModel");

const createHousehold = async (req, res) => {
  //   let coord =
  //     String(req.body.coordonates.lat) + ", " + String(req.body.coordonates.long);
  //   let obj = {};
  //   let arr = ["school", "church", "bank", "hospital", "restaurant"];
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(arr[i]);

  //     const options = await {
  //       method: "GET",
  //       url: "https://trueway-places.p.rapidapi.com/FindPlacesNearby",
  //       qs: {
  //         location: coord,
  //         type: arr[i],
  //         radius: "10000",
  //         language: "en",
  //       },
  //       headers: {
  //         "X-RapidAPI-Key": "9b3c453479msh69ce199e5570e12p16b0d4jsn8c821f34ab2f",
  //         "X-RapidAPI-Host": "trueway-places.p.rapidapi.com",
  //         useQueryString: true,
  //       },
  //     };

  //     request(options, function (error, response, body) {
  //       if (error) throw new Error(error);
  //       console.log(JSON.parse(body));
  //       obj.a = JSON.parse(body).results.length;
  //     });
  //   }
  //   obj.test = "alex";
  //   res.json(obj);
  try {
    const user = await User.findByPk(req.params.UserId);
    console.log(user);
    if (user) {
      const household = new Household(req.body);
      household.UserId = user.id;
      await household.save();
      res.status(201).json({ message: "Household added" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    next(error);
  }
};

const filteredHouseholds = async (req, res) => {
  var allHouseholds = await Household.findAll();

  if (allHouseholds) {
    if (req.query.school == "true") {
      allHouseholds = allHouseholds.filter((x) => x.school >= 2);
    }
    if (req.query.church == "true") {
      allHouseholds = allHouseholds.filter((x) => x.church >= 2);
    }
    if (req.query.hospital == "true") {
      allHouseholds = allHouseholds.filter((x) => x.hospital >= 2);
    }
    if (req.query.restaurant == "true") {
      allHouseholds = allHouseholds.filter((x) => x.restaurant >= 2);
    }
    res.json(allHouseholds);
  } else {
    res.status(404).json({ message: "No Household Found" });
  }
};

module.exports = { createHousehold, filteredHouseholds };
