const mongoose = require ("mongoose");
const { post } = require("../app");


const postSchema = new mongoose.Schema({
    image : String ,
    caption : String 
})


const postModels= mongoose.model("post", postSchema);


module.exports= postModels