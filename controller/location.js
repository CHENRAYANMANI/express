// const mongoose = require("mongoose")

const location = require("../Modal/location")

exports.getAllLoc =async(req,res)=>{
    try{
        const result = await location.find()
        res.status(200).send(result)
    }catch(err){
        console.log(err)
    }
}


