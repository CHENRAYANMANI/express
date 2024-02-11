const express = require("express");
const router = express.Router();
const loc = require("./controller/location");
const mealType = require("./controller/mealType");
const restaruant = require("./controller/restaruant");
const signUp = require("./controller/signup");
const signIn = require("./controller/signIn");

router.get("/getallloc", loc.getAllLoc);
router.get("/getallrest/:city", restaruant.getCity);
router.get("/getAllRest/:id", restaruant.getRestId);
router.get("/getallmeal", mealType.getAllMealtype);
router.get("/getAllRestaruents", restaruant.getAllrestaruant);
router.post("/signup", signUp.getAllSignUp);
router.get("/api/query", restaruant.getQuery);
router.post("/signin", signIn.getSignIn);

module.exports = router;
