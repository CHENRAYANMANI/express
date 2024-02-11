const restaruant = require("../Modal/restaruantsname");

exports.getAllrestaruant = async (req, res) => {
  try {
    const result = await restaruant.find();
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
  }
};
exports.getRestId = async (req, res) => {
  try {
    const id = req.params._id;
    console.log(id);
    const result = await restaruant.find({ _id: id });
    res.status(200).send(result);
  } catch {
    res.status(500).send("internal server error");
  }
};
exports.getCity = async (req, res) => {
  try {
    // console.log(window);
    const city = req.params.city;
    console.log(city);
    const requestCity = await restaruant.find({ city: city }); // use query
    res.status(200).send(requestCity);
  } catch (err) {
    console.log(err);
  }
};
exports.getQuery = async (req, res) => {
  try {
    const { mealtype_id, city, cuisine, lowCost, highCost, sort, page } =
      req.query;

    const query = {};

    if (mealtype_id) query.mealtype_id = mealtype_id;
    if (city) query.city = city;
    if (cuisine) {
      query["cuisine.name"] = String(cuisine);
    }
    if (lowCost && highCost)
      query.min_price = { $gte: lowCost, $lte: highCost };

    const sortOptions = {};
    if (sort) sortOptions[sort] = 1;

    const limit = 10;
    const skip = (page - 1) * limit;

    const restaurants = await restaruant
      .find(query)
      .sort(sortOptions)
      .limit(limit)
      .skip(skip);

    res.json(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
