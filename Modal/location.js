const mongoose = require("mongoose")

const locationName = new mongoose.Schema({
    userId:{type:Number,},
    id:{type:Number,},
    title:{type:String,},
    completed:{type:Boolean}
})

const location = mongoose.model('location',locationName)

module.exports =location