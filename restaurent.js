const restaruent = require("../model/restaurants.json");
exports.restaruentfunc =(req,res)=>{
    res.send(restaruent)
}